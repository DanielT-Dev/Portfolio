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
            media: "/Graph1.png",
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
            media: "/Graph1.png",
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
    content: [

    ]
}

const post3 = {
  post_id: 3,
  title: "The Object-Oriented Programming Paradigm",
  date: "20 March 2025",
  description: "What makes OOP different from other coding paradigms like Procedural Coding and Imperative Coding",
  tags: ["OOP", "Paradigm", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
  content: [
    {
      header: "Overview",
      paragraph: "OOP (Object-Oriented Programming) is a paradigm that organizes code into objects, which contain both data (attributes) and behavior (methods). It follows key principles like encapsulation, inheritance, abstraction, and polymorphism to promote reusable, modular, and scalable code.",
      media: "/OOP3.svg",
    },
    {
      header: "But first, what is a coding paradigm?",
      paragraph: "A coding paradigm is a fundamental style or approach to programming that defines how code is structured and executed. It is a way of understanding aspects from real life and representing them in code.",
      media: "/OOP2.png",
    },
    {
      header: "Procedural Paradigm vs. Object-Oriented Paradigm",
      paragraph: `<ul>
        <li><strong>Approach:</strong>
            <ul>
                <li><b>Procedural:</b> Focuses on procedures (functions).</li>
                <li><b>Object-Oriented:</b> Focuses on objects (data + behavior).</li>
            </ul>
        </li>
        
        <li><strong>Structure:</strong>
            <ul>
                <li><b>Procedural:</b> Code is organized into functions and sequential steps.</li>
                <li><b>Object-Oriented:</b> Code is organized into classes and objects.</li>
            </ul>
        </li>
        
        <li><strong>Data Handling:</strong>
            <ul>
                <li><b>Procedural:</b> Data is separate from functions.</li>
                <li><b>Object-Oriented:</b> Data is encapsulated within objects.</li>
            </ul>
        </li>

        <li><strong>Reusability:</strong>
            <ul>
                <li><b>Procedural:</b> Uses functions for reuse.</li>
                <li><b>Object-Oriented:</b> Uses inheritance and polymorphism for reuse.</li>
            </ul>
        </li>

        <li><strong>Examples:</strong>
            <ol>
                <li><b>Procedural:</b> C, Pascal.</li>
                <li><b>Object-Oriented:</b> Java, Python, C++.</li>
            </ol>
        </li>
    </ul>
      <p><strong>Key Difference:</strong> Procedural programming is function-driven, while OOP is object-driven, making it more modular and scalable.</p>
    `,
      media: ""
    },
    {
      header: "The 4 principles",
      paragraph: "Next, we will delve into the four fundamental principles of Object-Oriented Programming (OOP) that serve as the foundation for designing robust and scalable software systems.",
      media: "/OOP1.png"
    },
    {
      header: "Encapsulation",
      paragraph: "Encapsulation is the OOP principle that combines data and methods into a single unit (class) while restricting direct access to some of its components. This helps protect the object's internal state and allows controlled access through public methods.",
      media: "",
    },
    {
      header: "Abstraction",
      paragraph: "Abstraction is the OOP principle of hiding complex implementation details and exposing only the necessary features or functionality. It simplifies interactions by providing a clear interface while keeping the internal workings hidden.",
      media: "",
    },
    {
      header: "Inheritance",
      paragraph: "Inheritance is an OOP principle that allows a class (child class) to inherit attributes and methods from another class (parent class). It promotes code reuse, enabling the child class to extend or modify the behavior of the parent class, creating a hierarchical relationship between them.",
      media: "",
    },
    {
      header: "Polymorphism",
      paragraph: "Polymorphism is an OOP principle that allows objects of different classes to be treated as instances of the same class through a common interface. It enables a single method or function to operate on objects of various types, allowing different classes to provide their own implementation of the method. This promotes flexibility and scalability in the code.",
      media: "",
    },
  ]
}

const post4 = {
  post_id: 4,
  title: "OOP Principles - Encapsulation",
  date: "26 March 2025",
  description: "Find out how encapsulation simplifies code by protecting data and hiding complexity.",
  tags: ["OOP", "Paradigm", "Encapsulation", "Principles"],
  content: [
    {
      header: "Overivew",
      paragraph: "Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data (attributes) and the methods (functions) that operate on that data into a single unit, called a class. This concept helps protect the data from direct modification by outside code, which is a way to ensure that objects manage their own state securely. In encapsulation, the object's data is typically hidden from the outside world, and access to it is provided through public methods, often called getters and setters.",
      media: "/Encapsulation1.jpg",
    },
    {
      header: "Why is it usefull?",
      paragraph: "The main goal of encapsulation is to promote modularity and maintainability by controlling access to the internal workings of an object. It allows for changes to be made internally without affecting other parts of the program, as long as the interface (public methods) remains consistent. This way, encapsulation helps in reducing complexity and making code easier to debug and modify.",
      media: "",
    },
    {
      header: "",
      paragraph: "",
      media: "",
    },
  ]
}

export const avaiable_posts = [post1, post2, post3, post4]