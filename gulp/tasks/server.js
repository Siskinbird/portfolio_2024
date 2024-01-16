export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notufy: false,
    port: 3333
  })
}