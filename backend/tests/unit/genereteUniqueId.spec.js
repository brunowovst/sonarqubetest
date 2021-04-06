const genereteUniqueId = require('../../src/utils/generateUniqueId');

describe('Generete Unique ID',()=>{
    it('should generete unique ID',()=>{
        const id = genereteUniqueId();
        expect(id).toHaveLength(8);
    })
})