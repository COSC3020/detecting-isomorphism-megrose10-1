function are_isomorphic(graph1, graph2) {
    let isIsomorphic = false;
    let numOfVerticesGraph1 = Object.keys(graph1).length;
    //console.log(numOfNodesGraph1);
    let numOfVerticesGraph2 = Object.keys(graph2).length;
    //1. Check if they have the same number of vertices
    if(numOfVerticesGraph1 != numOfVerticesGraph2) {
        return false;
    }
    //2. Check edges
    let vertexDegreeListGraph1 = [];
    let vertexDegreeListGraph2 = [];
    
    for(let vertex in graph1) {
        vertexDegreeListGraph1.push(findDegree(graph1[vertex]));
    }
    for(let vertex in graph2) {
        vertexDegreeListGraph2.push(findDegree(graph2[vertex]));
    }
    //Since names of vertices do not matter, from least to greatest organize the degrees
    vertexDegreeListGraph1 = sortDegrees(vertexDegreeListGraph1);
    vertexDegreeListGraph2 = sortDegrees(vertexDegreeListGraph2);
    //console.log("vertex degree list for graph 1: " + vertexDegreeListGraph1);
    //console.log("vertex degree list for graph 2: " + vertexDegreeListGraph2);
    for(let i = 0; i < vertexDegreeListGraph1.length; i++) {
        if(vertexDegreeListGraph1[i] != vertexDegreeListGraph2[i]) {
            return false;
        }
    }
    
    //3. Look at different paths to check if structures are the same

    let verticesG1 = Object.keys(graph1);
    let verticesG2 = Object.keys(graph2);
    let perms = [];
    
    //Find all permutations for graph 2's vertices
    permutations(verticesG2, verticesG2.length, perms);

    //With each permutation, check the structure of the graph
    for(let perm of perms) {

        let graphStructures = {};

        for(let i = 0; i < verticesG1.length; i++) {
            graphStructures[verticesG1[i]] = perm[i]
        }

        if(checkGraphStructure(graph1, graph2, graphStructures)) {
            return true;
        }
    }

    return false;

}

function findDegree(vertexConnections) {
    //console.log(node);
    //console.log(node.length);
    return vertexConnections.length;
}

function sortDegrees(degreeList) {
    for(let i = 0; i < degreeList.length; i++) {
        for(let j = i + 1; j < degreeList.length; j++) {
            if(degreeList[i] > degreeList[j]) {
                let tmp = degreeList[i];
                degreeList[i] = degreeList[j];
                degreeList[j] = tmp;
            }
        }
    }
    return degreeList;
}

function permutations(a, n, graphStructures) {
    //Array to keep track of times we swap elements
    let c = [];

    //Initialize c to be the length of our array and each element as zero
    for(let i = 0; i < n; i++) {
        c[i] = 0;
    }

    //Start with element after first element
    let i = 1;

    //While there are still permuations
    while(i < n) {
        //If element should be swapped
        if(c[i] < i) {
            //if i is even, switch first and i positions
            if(i % 2 == 0) {
                let temp = a[0];
                a[0] = a[i];
                a[i] = temp;
            }
            //if i is odd, switch i and c[i] positions 
            else{
                let temp = a[c[i]];
                a[c[i]] = a[i];
                a[i] = temp;
            }

            //add permutation of array to perms
            graphStructures.push([...a]);

            c[i]++;
            i = 0;
        }
        else {
            c[i] = 0;
            i++;
        }
    }
}

function checkGraphStructure(graph1, graph2, graphStructures) {
    //For each vertiex is graph 1
    for(let vertexG1 in graph1) {
        //Get the connected vertices of the current vertex in graph 1
        let nextVerticesG1 = graph1[vertexG1];
        //Get the corresponding vertex in graph 2
        let pathVertex = graphStructures[vertexG1];
        //Find the corresponding vertex in graph 2's next vertices
        let nextVerticesG2 = graph2[pathVertex];

        if(nextVerticesG1.length != nextVerticesG2.length) {
            return false;
        }

        //Check the next vertices of the current vertex and
        //Check that the next vertex from graph 1 is in 
        //the next vertices of the vertex in graph 2
        for(let nextVertexG1 of nextVerticesG1) {
            let pathNextVertex = graphStructures[nextVertexG1];

            if(!nextVerticesG2.includes(pathNextVertex)) {
                return false;
            }
        }
    }

    return true;

}
