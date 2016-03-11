// because "Alice, Bob, Carlos and Diana"
// without the oxford comma irks me, I 
// let it be a parameter.

(function(peeps, oxfordComma) {
	return [
		peeps.slice(0,peeps.length-1).join(', '),
		peeps[peeps.length-1]
	].join((oxfordComma ? ', ' : ' ') + 'and ');
})(people);
