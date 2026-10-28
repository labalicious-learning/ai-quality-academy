// © 2026 Jared Cluff. Link only known public course files; never guess a remote URL.
const filePattern=/(?<![\w@])(?:\.\.\/|\.\/)?(?:[\w.-]+\/)*[\w.-]+\.(?:md|mjs|json|csv|html|js|txt|ya?ml|png|svg)(?![\w.-])/g;
const outputs=new Set(['claim-table.md','allocation-local.png','investigation.md','notes.md','memo.md','authorization-results.md','round-1.md','round-2.md','round-3.md','incident-update.md','visual-review.md','candidate-a-375.png']);
function normalize(s){const parts=[];for(const p of s.split('/')){if(!p||p==='.')continue;if(p==='..')parts.pop();else parts.push(p);}return parts.join('/');}
export function resolveFile(name,{file='',files=[],repository='https://github.com/labalicious-learning/ai-quality-academy',rendered=true}={}){
 const dir=file.includes('/')?file.slice(0,file.lastIndexOf('/')+1):'';
 const known=new Set(files);let target=known.has(name)?name:normalize(dir+name);
 if(!known.has(target)){
  const matches=files.filter(f=>f.split('/').pop()===name);
  if(matches.length===1)target=matches[0];
  else if(outputs.has(name)||/^submissions\/session-\d{2}\/[\w.-]+\.md$/.test(name))return {href:(file.includes('/')?'../':'')+'LAB_HELP.'+(rendered?'html':'md')+'#save-your-work',title:'Create '+name+' in your own scratch folder — saving instructions',kind:'create'};
  else return null;
 }
 const prefix='../'.repeat(Math.max(0,file.split('/').length-1));
 const local=target.endsWith('.md')||/^(fixtures|templates)\//.test(target);
 const href=local?prefix+(rendered?target.replace(/\.md$/,'.html'):target):repository+'/blob/main/'+target.split('/').map(encodeURIComponent).join('/');
 return {href,title:'Open course file: '+target,kind:'source'};
}
export function fileLinksPlugin(md){
 md.core.ruler.after('inline','course-file-links',state=>{
  if(!state.env.courseFiles)return;
  const options={file:state.env.courseFile,files:state.env.courseFiles,repository:state.env.courseRepository,rendered:state.env.courseRendered!==false};
  for(let ti=0;ti<state.tokens.length;ti++){
   const block=state.tokens[ti];if(block.type!=='inline'||state.tokens[ti-1]?.type==='heading_open')continue;
   let depth=0;const children=[];
   for(const token of block.children||[]){
    if(token.type==='link_open')depth++;if(token.type==='link_close')depth--;
    if(depth||!['text','code_inline'].includes(token.type)){children.push(token);continue;}
    let last=0,html='',linked=false;
    for(const match of token.content.matchAll(filePattern)){
     const found=resolveFile(match[0],options);if(!found)continue;
     html+=md.utils.escapeHtml(token.content.slice(last,match.index));
     html+='<a class="course-file-link '+(found.kind==='create'?'create-file-link':'')+'" href="'+md.utils.escapeHtml(found.href)+'" title="'+md.utils.escapeHtml(found.title)+'">'+md.utils.escapeHtml(match[0])+'</a>';
     last=match.index+match[0].length;linked=true;
    }
    if(!linked){children.push(token);continue;}
    html+=md.utils.escapeHtml(token.content.slice(last));const replacement=new state.Token('html_inline','',0);replacement.content=token.type==='code_inline'?'<code>'+html+'</code>':html;children.push(replacement);
   }
   block.children=children;
  }
 });
}
