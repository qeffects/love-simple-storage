# A simple persistent storage model for love

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