# A simple persistent storage model for love

[![Tests](https://github.com/qeffects/love-simple-storage/actions/workflows/node.js.yml/badge.svg)](https://github.com/qeffects/love-simple-storage/actions/workflows/node.js.yml)

(the files aren't human readable)

Requires love > 11.4

usage:

```lua
local simpleStorage = require('simpleStorage')

local foo = simpleStorage.getField('foo', false)

if foo then
    print('hello world')
else
    simpleStorage.setField('foo', true)
end
```

Optionally set the file handle before the first require like so:

```lua
SIMPLE_STORAGE_FILE = 'foo.storage'
local simpleStorage = require('simpleStorage')
```

Mind that setField will write the file to the disk.

Available in NPM as a typescript to lua ready library:

https://www.npmjs.com/package/love-simple-storage


or as a bundled lua only library: https://github.com/qeffects/love-simple-storage/suites/4831790610/artifacts/136621514