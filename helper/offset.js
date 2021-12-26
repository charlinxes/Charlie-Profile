export default function offset (eleNode) {
  let position;
  const result = {
    top: 0,
  };

  function getOffset (node, init) {
    // 如果不是元素節點，則直接返回。nodeType=1为元素節點，
    if (node.nodeType !== 1) {
      return;
    }
    // window.getComputedStyle获取元素的所有样式
    position = window.getComputedStyle(node).position;
    // 如不是首次計算，并且position為static，則跳過，繼續遞歸父级
    if (typeof (init) === 'undefined' && position === 'static') {
      getOffset(node.parentNode);
      return;
    }
    // 減去node.scrollTop是因為，如果元素在一個带有滾動條的父元素内，則offsetTop會獲取整個高度
    // 如果滾動條不為0則需要減去已滾動的部分。
    result.top += node.offsetTop - node.scrollTop;

    if (position === 'fixed') {
      return;
    }
    // 遞歸調用
    getOffset(node.parentNode);
  };

  // 當前DOM節點的display:none時, 直接返回 {top: 0}
  if (window.getComputedStyle(eleNode).display === 'none') {
    return result;
  }
  getOffset(eleNode, true);
  return result;
};
