var start = require('./common')
  , assert = require('assert')
  , mongoose = start.mongoose
  , Schema = mongoose.Schema;
//  , random = require('../lib/utils').random;

  describe('connections', function(){
      describe('#indexOf()', function(){
          it('should allow closing a closed connection', function(done){
              var db = mongoose.createConnection()
              , called = false;

              assert.equal(0, db.readyState);
              db.close(done);
          })
          it('should accept mongodb://localhost/fake'
             , function(done)
             { var db = mongoose.createConnection('mongodb://localhost/test');
               db.on('error', function(err){});
               assert.equal('object', typeof db.options);
               assert.equal('object', typeof db.options.server);
               assert.equal(true, db.options.server.auto_reconnect);
               assert.equal('object', typeof db.options.db);
               assert.equal(false, db.options.db.forceServerObjectId);
               assert.equal('primary', db.options.db.read_preference);
               assert.equal(undefined, db.pass);
               assert.equal(undefined, db.user);
               assert.equal('test', db.name);
               assert.equal('localhost', db.host);
               assert.equal(27017, db.port);
               db.close(done);
             });
      })
  })
