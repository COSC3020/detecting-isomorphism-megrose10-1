# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I used my code from last semester, and modified it. I used the lecture slides and video on graphing, I also used what I learned through completing graph representations, dijkstras and isomorphism nodes connectivity exercises. I watched the following video for more clarification on isomorphism https://www.youtube.com/watch?v=m36p-g_rxpA. Used test.yml from mergesort. Referenced test file from dijkstras exercise. Learned about includes function https://www.w3schools.com/jsref/jsref_includes_array.asp. I also used your comments from last semester in my previous pull requests. I also use my brute force sorting exercise, and referenced your test code from the tsp held kard exercise to refresh on the asserts.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

When finding the worst-case time complexity, looking at the beginning, we go over each vertex in graph 1 and 2 adding them to another array, so O(V+V).  We sort these arrays using bubble sort, which is a time complexity of O(V^2). Next we check if the degrees are the same, this gives us a time complexity of O(V).  Next, we find all the permutations, which causes a time complexity of O(V!), since we have a v factorial number of possibilities the graph could be in. Nex we go over each permutation, checking each vertex can be mapped to another and follow the same structure. This causes a runtime of O(E+V) for each permutation, since we much check the vertex and the next vertices, edges it is connected to all match up. Once we do all this we can check that the two graphs are isomorphic. Ignoring constant factors and factors that do not affect runtime as much, we get a runtime of big $\Theta$(V! * (E+V)), since for each permutation, we must check that vertex’s structure.
