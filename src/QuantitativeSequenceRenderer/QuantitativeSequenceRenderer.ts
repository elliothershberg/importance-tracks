import PluginManager from '@jbrowse/core/PluginManager'
import { getOrigin, getColor } from '../util'

export default function rendererFactory(pluginManager: PluginManager) {
  const WigglePlugin = pluginManager.getPlugin(
    'WigglePlugin',
  ) as import('@jbrowse/plugin-wiggle').default
  const {
    utils: { getScale },
    //@ts-ignore
    XYPlotRenderer,
    //@ts-ignore
  } = WigglePlugin.exports

  const { featureSpanPx } = pluginManager.lib['@jbrowse/core/util']

  return class QuantitativeSequenceRenderer extends XYPlotRenderer {
    draw(ctx: CanvasRenderingContext2D, props: any) {
      const {
        features,
        regions,
        bpPerPxhtPx] = featureSpanPx(feature, region, bpPerPx)
        const w = rightPx - leftPx + 0.4 // fudge factor for subpixel rendering
        const score = feature.get('score') as number
        const base = feature.get('base')
        ctx.fillStyle = getColor(base)
        if (1 / bpPerPx < 10) {
          ctx.fillRect(leftPx, toY(score), w, toHeight(score))
        } else {
          ctx.setTransform(
            w / 10,
            0,
            0,
            toHeight(score) / 4,
            leftPx * 2 + (rightPx - leftPx),
            height + toY(0) / 2 + YSCALEBAR_LABEL_OFFSET,
          )

          ctx.fillText(base, 0, 0)
        }
      }
      ctx.resetTransform()

      if (displayCrossHatches) {
        ctx.lineWidth = 1
        ctx.strokeStyle = 'rgba(200,200,200,0.8)'
        values.forEach((tick: number) => {
          ctx.beginPath()
          ctx.moveTo(0, Math.round(toY(tick)))
          ctx.lineTo(width, Math.round(toY(tick)))
          ctx.stroke()
        })
      }
    }
  }
}
