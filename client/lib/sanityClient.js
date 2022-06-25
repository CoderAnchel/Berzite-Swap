import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '0yf54kk6',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skg0050lhrnBWbAfkU6mdRHrtZRjHIiWjchPC6Vm94I1WXfWFvhXLiEUlvfWBXewBnqfwxSUTxZ1x4FUpZYZf17Merv4CdPgTvyA1gojDJDkFdLFaCISwO93WeFtqxMstfCdQr93i2eWAaUhzN0EiAzxhDneIBi0vQf7Pwv7BXspViJbPwU9',
    useCdn: false
})