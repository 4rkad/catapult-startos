import { setupManifest } from '@start9labs/start-sdk'
import { long, short, alertInstall } from './i18n'

export const manifest = setupManifest({
  id: 'catapult',
  title: 'Catapult',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/semillabitcoin/catapult-startos',
  upstreamRepo: 'https://github.com/semillabitcoin/catapult',
  marketingUrl: 'https://github.com/semillabitcoin/catapult-startos',
  donationUrl: null,
  docsUrls: [],
  description: { short, long },
  volumes: [],
  images: {
    main: {
      source: { dockerBuild: { dockerfile: './Dockerfile' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: alertInstall,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
