import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Catapult...')

  const sub = await sdk.SubContainer.of(
    effects,
    { imageId: 'main' },
    sdk.Mounts.of(),
    'catapult-sub',
  )

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sub,
    exec: { command: ['nginx', '-g', 'daemon off;'] },
    ready: {
      gracePeriod: 5_000,
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
    },
    requires: [],
  })
})
