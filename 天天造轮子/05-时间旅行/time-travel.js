module.exports = createHistory = () => {
  const timeline = {
    past: [], // 过去的记录
    present: null, // 当前状态
    future: [], // 未来的状态
  }

  timeline.gotoState = (index) => {
    const allState = [...timeline.past, timeline.present, ...timeline.future];
    timeline.present = allState[index];
    timeline.past = allState.slice(0, index);
    timeline.future = allState.slice(index + 1);
  };

  timeline.push = (currentState) => {
    if (timeline.present) {
      timeline.past.push(timeline.present);
    }

    timeline.present = currentState;
  };

  timeline.undo = () => {
    if (timeline.past.length !== 0) {
      timeline.gotoState(timeline.past.length - 1);
    }
  }

  return timeline;
}