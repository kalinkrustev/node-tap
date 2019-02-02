const {
  tmpfile,
  run,
  t,
  clean,
} = require('./')

t.test('rcfile overridden by arg')
t.test('--grep-invert')
t.test('greps with no / on them')

t.test('shotgun a bunch of option parsing junk', t => {
  run([
    '--dump-config', '-J', '--jobs', '4',
    '--no-browser', '--no-coverage-report', '--coverage-report', 'json',
    '--coverage-report=html', '--no-cov', '--cov', '--save', 'foo.txt',
    '--reporter=spec', '--gc', '--strict', '--debug', '--debug-brk',
    '--harmony', '--node-arg=xyz', '--check-coverage', '--test-arg=xyz',
    '--test-arg', 'abc', '--100', '--branches=99', '--lines', '100',
    '--color', '--no-color', '--output-file=out.txt', '--no-timeout',
    '--timeout', '99', '--invert', '--no-invert', '--grep', 'x',
    '--grep=/y/i', '--bail', '--no-bail', '--only', '-R', 'spec',
    '--node-arg', 'abc', '--nyc-arg', 'abc', '-o', 'out.txt',
    '--comments'
  ], { env: {
    TAP: '0',
    TAP_BAIL: '0',
    _TAP_IS_TTY: '1'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})

t.test('short options as well as short flags', t => {
  run(['--dump-config','-j2','-Cb','-t=0' ], { env: {
    TAP: '0'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})

t.test('good rc file', t => {
  const rc = tmpfile(t, 'taprc', `
reporter: spec
jobs: 3
`)
  run(['--dump-config'], { env: {
    TAP_RCFILE: rc,
    TAP: 0
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})

t.test('empty rc file', t => {
  const rc = tmpfile(t, 'taprc', '')
  run(['--dump-config', '-c'], { env: {
    TAP_RCFILE: rc,
    TAP: '0',
    _TAP_IS_TTY: '1',
    TAP_COLORS: '1'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})
