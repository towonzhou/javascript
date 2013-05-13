var serial_maker = function() {
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p) {
			prefix = p;
		},
		set_seq: function (s) {
			seq = s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	}
}

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
console.log(seqer.gensym());
seqer.set_prefix('W');
console.log(seqer.gensym());
