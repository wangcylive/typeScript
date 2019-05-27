export default function () {
  function getLength(value: string | number): number {
    if ((<string>value).length) {
      return (<string>value).length
    } else {
      return (value + '').length
    }
  }

  function getOffsetTop(ele: HTMLElement): number {
    const el = ele.children[4] as HTMLElement

    if (el) {
      return el.offsetTop
    } else {
      return 0
    }
  }
}