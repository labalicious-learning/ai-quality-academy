// © 2026 Jared Cluff. Real browser interactions, with stable targets and visible panels.
export async function revealControl(page,selector){
  const panels=await page.$eval(selector,element=>{
    const result=[];
    let panel=(element.tagName==='SUMMARY'?element.parentElement.parentElement:element.parentElement)?.closest('details.path-section');
    while(panel){if(!panel.open)result.unshift(panel.id);panel=panel.parentElement.closest('details.path-section');}
    return result;
  });
  for(const id of panels)await page.locator('#'+id+'>summary').click();
}
export async function click(page,selector){
  await revealControl(page,selector);
  // Locator waits for visibility, enabled state and stable bounds. Page.click uses a
  // one-time position that can become stale while the app focuses/scrolls a form.
  await page.locator(selector).click();
}
export async function type(page,selector,value){await revealControl(page,selector);await page.type(selector,value);}
export async function select(page,selector,...values){await revealControl(page,selector);return page.select(selector,...values);}
