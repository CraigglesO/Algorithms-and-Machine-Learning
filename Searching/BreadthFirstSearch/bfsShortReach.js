var fs = require('fs');

fs.readFile('text.txt','utf8',function(err,data){
	if (err) throw err;
	
	data = data.split('\n');
	data = data.map(function (x){return x.split(' ').map(Number)});
	main(data);
});

/**
 * Description
 * @method BFS
 * @param {} G
 * @param {} s
 * @return 
 */
function BFS(G,s){
	G[s-1].found = true;
	G[s-1].distance = 0;
	var Q = [];
	var u = {};
	Q.push(G[s-1]);
	while (Q != 0){
		u = Q.shift();
		u.adj.forEach(function (x){
			if (!G[x-1].found){
				G[x-1].found = true;
				G[x-1].distance = u.distance+1;
				Q.push(G[x-1]);
			}
		});
	}
}

/**
 * Description
 * @method main
 * @param {} input
 * @return 
 */
function main(input){
	
	var t = input[0][0]
	input.shift();
	var t_tracker = 0;
	while (t--){

		var G = [];
		var e = [];
		var s = 0;
		var n = input[t_tracker][0];
		var m = input[t_tracker][1];
		for (i = 1; i < m+1; i++){
			e.push(input[t_tracker+i]);
		}
		s = input[t_tracker+1+m][0];
		for (i = 0; i < n; i++){
			var v = {'found':false,'distance':(-1),'adj':[]};
			G.push(v);
		}
		e.forEach(function (x,i){
			G[x[0]-1].adj.push(x[1]);
			G[x[1]-1].adj.push(x[0]);
		});


		BFS(G,s);

		G.forEach(function (x){

			if (x.distance == 0){
				//do nothing
			}

			else if (x.distance == -1){

				process.stdout.write(-1+' ');
			}

			else {

				process.stdout.write(x.distance*6+' ');
			}
		});
		console.log();
		
		t_tracker += (2+m);
	}
}