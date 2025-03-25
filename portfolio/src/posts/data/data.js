export const post_template = {
    post_id: null,
    title: "",
    date: "",
    description: "",
    tags: [],
    content: {

    }
}

const post1 = {
    post_id: 1,
    title: "Dijkstra's Algorithm",
    date: "22 March 2025",
    description: "Exploring the algorithm for finding optimal paths in a graph.",
    tags: ["Graph Theory", "Dijkstra", "Complexity", "Time"],
    content: [
        {
            header: "Overview",
            paragraph: `Dijkstra's algorithm is a graph algorithm used to find the shortest path 
            from a single source node to all other nodes in a weighted graph. It works by exploring 
            the closest unvisited node first, updating distances along the way. `,
            media: "Graph1.png",
        },
        {
            header: "Algorithm Steps",
            paragraph: `
  <ol>
    <li>
      <strong>Initialize distances:</strong>
      <ul>
        <li>Set the distance to the source node as 0 (dist[source] = 0).</li>
        <li>Set the distance to all other nodes as infinity (dist[node] = ∞).</li>
        <li>Create a priority queue (or a min-heap) to store nodes based on their current distance from the source.</li>
      </ul>
    </li>
    <li>
      <strong>Mark all nodes as unvisited:</strong>
      <ul>
        <li>The algorithm will loop through the graph, visiting each node once.</li>
      </ul>
    </li>
    <li>
      <strong>Select the node with the smallest tentative distance:</strong>
      <ul>
        <li>From the unvisited nodes, select the node with the smallest known distance (u).</li>
      </ul>
    </li>
    <li>
      <strong>Update distances to neighbors:</strong>
      <ul>
        <li>
          For each unvisited neighbor (v) of the current node (u), calculate the tentative distance from the source node to v through u: 
          <code>distance[v] = Math.min(distance[v], distance[u] + weight(u, v))</code>
        </li>
        <li>If the calculated distance is smaller than the current distance, update it.</li>
      </ul>
    </li>
    <li>
      <strong>Mark the current node as visited:</strong>
      <ul>
        <li>Once a node's distances are finalized, mark it as visited, and it will not be checked again.</li>
      </ul>
    </li>
    <li>
      <strong>Repeat:</strong>
      <ul>
        <li>Continue this process until all nodes are visited or the priority queue is empty.</li>
      </ul>
    </li>
    <li>
      <strong>End:</strong>
      <ul>
        <li>After the algorithm ends, the <code>dist</code> array will contain the shortest path distances from the source node to every other node in the graph.</li>
      </ul>
    </li>
  </ol>
  `,
            media: "Graph1.png",
        },
        {
            header: "",
            paragraph: "",
            media: "",
        },
    ]
}
const post2 = {
    post_id: 2,
    title: "Can we use Binary Search?",
    date: "21 March 2025",
    description: "Unusual situations in which binary search can be applied for algorithm optimisation.",
    tags: ["Algorithms", "DSA", "Binary Search", "Search", "Complexity", "Time"],
    content: {

    }
}

export const avaiable_posts = [post1, post2]