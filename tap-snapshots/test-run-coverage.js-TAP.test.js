/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/coverage.js TAP --100 pass > 100 pass 1`] = `
TAP version 13
# Subtest: 1.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 1 - 1.test.js # {time}

# Subtest: 2.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 2 - 2.test.js # {time}

# Subtest: 3.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 3 - 3.test.js # {time}

1..3
# {time}
-|-|-|-|-|-|
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
-|-|-|-|-|-|
All files | 100 | 100 | 100 | 100 | |
 ok.js | 100 | 100 | 100 | 100 | |
-|-|-|-|-|-|

`

exports[`test/run/coverage.js TAP --100 fail > 100 fail 1`] = `
TAP version 13
# Subtest: 1.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 1 - 1.test.js # {time}

# Subtest: 2.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 2 - 2.test.js # {time}

1..2
# {time}
-|-|-|-|-|-|
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
-|-|-|-|-|-|
All files | 75 | 75 | 100 | 75 | |
 ok.js | 75 | 75 | 100 | 75 | 6 |
-|-|-|-|-|-|

`

exports[`test/run/coverage.js TAP report only > lcov output 1`] = `
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`

exports[`test/run/coverage.js TAP report with checks > lcov output and 100 check 1`] = `
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`

exports[`test/run/coverage.js TAP process tree > report with process tree 1`] = `
TAP version 13
# Subtest: 1.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 1 - 1.test.js # {time}

# Subtest: 2.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 2 - 2.test.js # {time}

1..2
# {time}
-|-|-|-|-|-|
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
-|-|-|-|-|-|
All files | 75 | 75 | 100 | 75 | |
 ok.js | 75 | 75 | 100 | 75 | 6 |
-|-|-|-|-|-|
nyc
└─┬ {NODE} {TAPDIR}/bin/run.js --show-process-tree 1.test.js 2.test.js --cov --nyc-arg=--include=ok.js
  │   75 % Lines
  ├── {NODE} {CWD}/1.test.js
  │     75 % Lines
  └── {NODE} {CWD}/2.test.js
        75 % Lines


`

exports[`test/run/coverage.js TAP pipe to service > piped to coverage service cat 1`] = `
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`
