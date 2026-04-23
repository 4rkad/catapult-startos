import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_0_1 = VersionInfo.of({
  version: '0.1.0:1',
  releaseNotes: {
    en_US: 'Initial StartOS release of Catapult CoinSwap app',
    es_ES: 'Primera versión para StartOS de Catapult (app CoinSwap)',
    de_DE: 'Erste StartOS-Version der Catapult-CoinSwap-App',
    pl_PL: 'Pierwsze wydanie aplikacji CoinSwap Catapult dla StartOS',
    fr_FR: 'Première version StartOS de l’application CoinSwap Catapult',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
