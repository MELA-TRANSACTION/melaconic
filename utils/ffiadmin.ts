import { applicationDefault, initializeApp } from "firebase-admin/app";

// var serviceAccount = {
//   type: "service_account",
//   project_id: "mela-business",
//   private_key_id: "d663f5d2eee386166557b62436887630ad09dd47",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgMP2Ge4QXczks\n4S13x2loNnPPNBY9GOo7Wq1+tJF7xHGMAcaIi8ti59N7vm0ae3e6Ish3/8LjDr/K\nizuFA2tasrHLqZMSvcu5qXBLWFrLSEdI5o8VtnWSvZII1Jf49ycjulBLRGoo8Gc3\nMDK5tg/9sY+dAu4BkJYB+Ypf6IP6Y8TOxEDPEPrboz9Gn3Qws9ELARnzDFKGyw7l\noSyQQ869tf856vV1dP5JECq3V0lUyWAoxCbz4haejkjm/e7b0BYFuwV0ktr7h/aE\nI2KOS4eprPNoNYssz4/MRRTdizD1vOMSU2HYSviGyUDODsyNjWep1WMw9wbYIOR1\n9+FLKWhDAgMBAAECggEAEbB3PpODKafCp48SG0j8/dINhdMFpaeLrhQ8VmKQMi+m\nLkS/7LIrOnfJJcAIgkUiGn7ezkmC9tnZGf+4Cd8vyqsy8P9/yzEEPzNTwC44kHwh\nyw4SvN4SK6sdZjY7tfVs8AgR983NP0oUy8ZZw6I0L9qctkTtjWSu+/bXbfHaKRsQ\nk+O4PPcBEq4/imsPcDgTD+haYdpog+Tk3kLrMLH7I1WAu8FkiyVgMwAff1ajspSC\n+7l/GV0CFc47MyMQ6W/KfpA2HoFm9sRI3wU0fES9ls7KOadmcYW9WzZPFFGLbukH\n3+nyVOHMvmvMJZWAOPlV9OqX5UZoC7RWYyy4DfIjkQKBgQDOe3yyeyd9r7YiIiAM\nlQbBo6c4nQJrr5JcNP7CeXe29Hqh6GpMtcFfoPZV3EEjqwzBGNEirpSRnZEITlfI\n3zLfkRniX9HfzL8u43hru2BFnE3nBf4bjTywwBcYYxNFndB59PaH+RMm0Cfve0Ec\nrCW1MlEGNw+NM/xs5X08fB5mawKBgQDGm5KvcuQTTxyc7KgW8i6f1eEjp5UnvarJ\nbgh8tZWEX1XkePCbSamGqPA/6nghllg17E+YmRBpxcw5XfRbqpfEgQ5Y2/XiPP7q\nGzMrsOGkMe8yAXJ4rofEqRL8WZ6XdMWmB8FyBUaMRFF+jZJfPzJSEH05biG5c5iY\njMvjpPoLiQKBgEgXsYgXm8g0a2ErjQkXl05Qt3f6yfeTS4TKNBDunC/S2GZjYYn7\nA9NBvgBocI3lkQRyh8KWNeVJoHPH9rp5w6dvYBw73GlJcY8LeOYUfB6R3llFLF2u\nSHxl9SpcnUP3P+z07Ia5Hki08Nyaqjc6m8fSE5wZ6WIhvoa+8aUGqQ6VAoGAXNzT\nGkv7Dng4JbuV4Jy+ZifIDDbIS/uoBmT3fPAeh/VXoOtXfRRVOsx1AT2ti+7TMetb\nUDuJbBt7IPuoTNAYBF5fifbXIkBo5KdxJqWe63oZoGUC1CCvBKoVYX6545FK9RW9\nQoXq9ZzgCe9CGFzhN3PUSW0QQbkmCXYTw04ZSBkCgYEAi055R3FTYFL4xNA/54Su\n6MDxEqF7zNebHtKyFeqjqgLPbeBFz2ADdQC0KasFRBgWlsMMGPBjFXe5bXYn3V+Z\nncwMujzngtLdGrPIXfyxSjiwqV+vzl0gI/3Pr6VURBjB1lg7IXC63RYpl2ILrteC\nio8azeEZ7YQeAdnCdAvGf9c=\n-----END PRIVATE KEY-----\n",
//   client_email: "firebase-adminsdk-qlf4c@mela-business.iam.gserviceaccount.com",
//   client_id: "109204174621978139726",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qlf4c%40mela-business.iam.gserviceaccount.com",
// };

const admin = initializeApp({
  projectId: "mela-business",
  databaseURL: "https://mela-business.firebaseio.com",
});

export default admin;
