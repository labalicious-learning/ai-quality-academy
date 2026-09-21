// © 2026 Jared Cluff. Date selection uses public course metadata, not enrollment.
(() => {
  function next(schedule,now=Date.now()){
    if(!Array.isArray(schedule))return null;
    return schedule.filter(s=>Number.isFinite(Date.parse(s.start))&&Date.parse(s.end)>now)
      .sort((a,b)=>Date.parse(a.start)-Date.parse(b.start))[0]??null;
  }
  globalThis.CourseSchedule={next};
})();
