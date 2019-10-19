export class YlsLayer {
  constructor() {
    this.layerList = {};
  }
  
  add(newID) {
    if (typeof newID !== 'string') throw new Error('请传入正确参数')
    const id = `layer-${newID}`
    if (document.getElementById(id)) return
    const dom = document.createElement('div');
    dom.id = `layer-${newID}`;
    dom.setAttribute('class', `yls-layer`);
    document.body.appendChild(dom);
    this.layerList[newID] = true
  }
  
  del(newID) {
    if (typeof newID !== 'string') throw new Error('请传入正确参数')
    const id = `layer-${newID}`
    const dom = document.getElementById(id)
    if (!dom) return;
    dom.remove();
    delete this.layerList[newID]
  }
}
