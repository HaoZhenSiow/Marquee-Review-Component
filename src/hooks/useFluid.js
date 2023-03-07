import { useEffect } from "react"

export default function useFluid() {

  const initFluid = () => {
    useEffect(() => {
      updateViewportWidth()
      window.addEventListener('resize', updateViewportWidth)
      return () => {
        window.removeEventListener('resize', updateViewportWidth)
      }
    }, [])
  }

  const viewportDiffSmall = "(var(--viewportMedium) - var(--viewportSmall))"
  const viewportDiffBig = "(var(--viewportLarge) - var(--viewportMedium))"
  const viewportDiffFull = "(var(--viewportLarge) - var(--viewportSmall))"

  const multiplierSmall = "((var(--viewport) - var(--viewportSmall))/" + viewportDiffSmall + ")"
  const multiplierSmallMax = "((var(--viewportMax) - var(--viewportSmall))/" + viewportDiffSmall + ")"
  const multiplierSmallMin = "((var(--viewportMin) - var(--viewportSmall))/" + viewportDiffSmall + ")"

  const multiplierBig = "((var(--viewport) - var(--viewportMedium))/" + viewportDiffBig +")"
  const multiplierBigMax = "((var(--viewportMax) - var(--viewportMedium))/" + viewportDiffSmall + ")"
  const multiplierBigMin = "((var(--viewportMin) - var(--viewportMedium))/" + viewportDiffSmall + ")"

  const multiplierFull = "((var(--viewport) - var(--viewportSmall))/" + viewportDiffFull + ")"
  const multiplierFullMax = "((var(--viewportMax) - var(--viewportSmall))/" + viewportDiffFull + ")"
  const multiplierFullMin = "((var(--viewportMin) - var(--viewportSmall))/" + viewportDiffFull + ")"

  const fluidType = (small_num = 0, big_num = 0, unit = '', type = 'Full') => {

    let str = small_num + unit + " + " + (big_num - small_num) + unit + " * "

    if (small_num > big_num) {
      switch (type) {
        case 'b':
          return (
            "clamp( " +
              str + multiplierBigMax + ", " +
              str + multiplierBig + ", " +
              str + multiplierBigMin +
            ")"
          );
        case 's':
          return (
            "clamp( " +
              str + multiplierSmallMax + ", " +
              str + multiplierSmall + ", " +
              str + multiplierSmallMin +
            ")"
          );
        default:
          return (
            "clamp( " +
              str + multiplierFullMax + ", " +
              str + multiplierFull + ", " +
              str + multiplierFullMin +
            ")"
          );
      }
    }

    switch (type) {
      case 'b':
        return (
          "clamp( " +
            str + multiplierBigMin + ", " +
            str + multiplierBig + ", " +
            str + multiplierBigMax +
          ")"
        );
      case 's':
        return (
          "clamp( " +
            str + multiplierSmallMin + ", " +
            str + multiplierSmall + ", " +
            str + multiplierSmallMax +
          ")"
        );
      default:
        return (
          "clamp( " +
            str + multiplierFullMin + ", " +
            str + multiplierFull + ", " +
            str + multiplierFullMax +
          ")"
        );
    }
  }

  const fluidContainer= (pSM = 24, pLG = 165, pMin = 24) => {
    const maxContainerWidth = "(var(viewportMax) - ((" + pSM + " + (" + pLG + " - " + pSM + ") * " + multiplierFullMax + ") * 2))"
    const max = "(var(--viewport) - " + maxContainerWidth + ") * 0.5px"
    const value = "(" + pSM + " + (" + (pLG - pSM) + " * " + multiplierFull + ")) * 1px"
    const min = pMin + " * 1px"
    return (
      "0 max(" + max + ", " + value + ", " + min + ")"
    )
  }
  
  return { initFluid, fluidType, fluidContainer }
}

function updateViewportWidth() {
  document.documentElement.style.setProperty('--viewport', window.innerWidth)
}