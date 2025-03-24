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
            header: "",
            paragraph: "",
            media: false,
        },
        {
            header: "",
            paragraph: "",
            media: false,
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