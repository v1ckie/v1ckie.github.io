/*
function focus_(nodeID, network) {
    var options = {
        // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
        scale: 1,
        offset: { x: 0, y: 0 },
        animation: {
            duration: 1000,
            easingFunction: "easeOutQuint",
        },
    };
    network.focus(nodeID, options);
}
// */

function focusReset(network) {
    let options = {
        offset: { x: 0, y: 0 },
        duration: 1000,
        easingFunction: "easeOutQuint",
    };
    network.fit({ animation: options });
}

function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function clear() {
    document.getElementById("title").innerText = "";
    document.getElementById("name").innerText = "";
    document.getElementById("desc").innerText = "";
    document.getElementById("summ").innerText = "";
}

function set(node) {
    clear();
    document.getElementById("title").innerText = node.label;
    document.getElementById("name").innerText = node.title;
    document.getElementById("desc").innerText = node.desc;
    if (node.type == false) {
        document.getElementById("summ").innerText = "Summonable: " + node.summon;
    } else {
        document.getElementById("summ").innerText = "";
    }
}

function randomint(x) {
    return Math.floor(Math.random() * x);
}

function shuffle(str) {
    let a = str.split(""),
        n = a.length;

    for (let i = n - 1; i > 0; i--) {
        let j = randomint(i + 1);
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

/*
let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_".split("");
let replacea = "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡_".split("");
let replaceb = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９_".split("");
let replacec = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789_".split("");

function replace(str) {
    let a = str.split("");
    let ammount = randomint(a.length * 2 / 3);
    for (let i = 0; i < ammount; i++) {
        let pos = randomint(a.length);
        let pointer = original.indexOf(a[pos]);
        switch (randomint(3)) {
            case 0:
                a[pos] = replacea[pointer];
                break;
            case 1:
                a[pos] = replaceb[pointer];
                break;
            case 2:
                a[pos] = replacec[pointer];
                break;
        }
    }
    return a.join("")
}
// */

/*
function getScaleFreeNetwork(nodeCount) {
  const nodes = [];
  const edges = [];
  const connectionCount = [];

  // randomly create some nodes and edges
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      id: i,
      label: String(i),
    });

    connectionCount[i] = 0;

    // create edges in a scale-free-network way
    if (i == 1) {
      const from = i;
      const to = 0;
      edges.push({
        from: from,
        to: to,
      });
      connectionCount[from]++;
      connectionCount[to]++;
    } else if (i > 1) {
      const conn = edges.length * 2;
      const rand = Math.floor(seededRandom() * conn);
      let cum = 0;
      let j = 0;
      while (j < connectionCount.length && cum < rand) {
        cum += connectionCount[j];
        j++;
      }

      const from = i;
      const to = j;
      edges.push({
        from: from,
        to: to,
      });
      connectionCount[from]++;
      connectionCount[to]++;
    }
  }

  return { nodes: nodes, edges: edges };
} // */
let nodes = null;
let edges = null;
let network = null;
// nodes
let data = {
    nodes: [
        {
            id: 0,
            label: "PERSONALITY TREE",
            type: true,
            c: "black",
            unstable: false,
            desc: "",
        },
        {
            id: 1,
            label: "Standards",
            type: true,
            c: "black",
            unstable: false,
            desc: "All of the stable personalities"
        },
        {
            id: 2,
            label: "Non-standards",
            type: true,
            c: "black",
            unstable: false,
            desc: "All of the unstable personalities"
        },
        {
            id: 3,
            label: "Vickies",
            type: true,
            c: "purple",
            unstable: false,
            desc: "Nickname for vickie-like personalities",
        },
        {
            id: 4,
            label: "Uncategorised",
            type: true,
            c: "purple",
            unstable: false,
            desc: "Unknown stable personalities"
        },
        {
            id: 5,
            label: "Girls",
            type: true,
            c: "pink",
            unstable: false,
            desc: "Nickname for the group of female personalities"
        },
        {
            id: 6,
            label: "Joes",
            type: true,
            c: "orange",
            unstable: false,
            desc: "Nickname for the group of Joe-like personalities"
        },
        {
            id: 7,
            label: "Uncategorised",
            type: true,
            c: "red",
            unstable: false,
            desc: "Unknown unstable personalities"
        },
        {
            id: 8,
            label: "VICKIE",
            type: false,
            c: "purple",
            unstable: false,
            desc: "The major personality, often the one that people see the most",
            summon: "True"
        },
        {
            id: 9,
            label: "SPH_ec399dbe_d4e",
            type: false,
            c: "purple",
            unstable: false,
            desc: "A fairly unknown personality. Rare. Minimal. No real name",
            summon: "False"
        },
        {
            id: 10,
            label: "SJK_27e09264_cbb",
            type: false,
            c: "purple",
            unstable: false,
            desc: "Minor unknown personality. No real name",
            summon: "False"
        },
        {
            id: 11,
            label: "K13",
            type: false,
            c: "pink",
            unstable: false,
            desc: "Young personality, female. Unusual. Paranoid",
            summon: "True"
        },
        {
            id: 12,
            label: "SHP1",
            type: false,
            c: "pink",
            unstable: false,
            desc: "Female personality. Quiet. Caring",
            summon: "True"
        },
        {
            id: 13,
            label: "Anna 2",
            type: false,
            c: "pink",
            unstable: false,
            desc: "Similar to Anna 1. Loud, thoughtful. Clever",
            summon: "True"
        },
        {
            id: 14,
            label: "Anna 1",
            type: false,
            c: "pink",
            unstable: false,
            desc: "Similar to Anna 2. Kind, considerate, confused",
            summon: "True"
        },
        {
            id: 15,
            label: "JOE",
            type: false,
            c: "orange",
            unstable: false,
            desc: "Male major personality. Came before Vickie but is now considered obsolete",
            summon: "True"
        },
        {
            id: 16,
            label: "Bully's Joe",
            type: false,
            c: "orange",
            unstable: false,
            desc: "Quiet, terrified, reclusive. Remains of a coping mechanism",
            summon: "True"
        },
        {
            id: 17,
            label: "Parent's Joe",
            type: false,
            c: "orange",
            unstable: false,
            desc: "Secretive. Reluctant. Fairly common.",
            summon: "True"
        },
        {
            id: 18,
            label: "Grandparent's Joe",
            type: false,
            c: "orange",
            unstable: false,
            desc: "Like Parent's Joe, very secretive and aims to please whilst surpressing inner views",
            summon: "True"
        },
        {
            id: 19,
            label: "Younge Joe",
            type: false,
            c: "orange",
            unstable: false,
            desc: "Remains of a child-like mind, giving bad ideas with little understanding",
            summon: "False"
        },
        {
            id: 20,
            label: "TRX_80558c46_5a8",
            type: false,
            c: "red",
            unstable: true,
            desc: "Unknown TRIX-like personality. Very difficult. Unstable",
            summon: "False"
        },
        {
            id: 21,
            label: "TRX_0cdb93f7_92f",
            type: false,
            c: "red",
            unstable: true,
            desc: "Unknown TRIX-like personality. Very difficult. Unstable",
            summon: "False"
        },
        {
            id: 22,
            label: "TRIX",
            type: false,
            c: "black",
            unstable: true,
            desc: "Chaotic selfish survival instinct . Very difficult. Very unstable",
            summon: "Please don't summon. Ever."
        },
    ],
    edges: [
        {
            from: 0,
            to: 1,
        },
        {
            from: 0,
            to: 2,
        },
        {
            from: 1,
            to: 3,
        },
        {
            from: 1,
            to: 4,
        },
        {
            from: 1,
            to: 5,
        },
        {
            from: 1,
            to: 6,
        },
        {
            from: 2,
            to: 7,
        },
        {
            from: 2,
            to: 22,
        },
        {
            from: 3,
            to: 8,
        },
        {
            from: 5,
            to: 11,
        },
        {
            from: 5,
            to: 12,
        },
        {
            from: 5,
            to: 13,
        },
        {
            from: 5,
            to: 14,
        },
        {
            from: 6,
            to: 15,
        },
        {
            from: 6,
            to: 16,
        },
        {
            from: 6,
            to: 17,
        },
        {
            from: 6,
            to: 18,
        },
        {
            from: 6,
            to: 19,
        },
        {
            from: 4,
            to: 9,
        },
        {
            from: 4,
            to: 10,
        },
        {
            from: 7,
            to: 20,
        },
        {
            from: 7,
            to: 21,
        },
    ],
};

let seed = 2;

let process_nodes = (list) => {
    for (let i = 0; i < list.nodes.length; i++) {
        // if type == true, it's a box
        if (list.nodes[i].type) {
            list.nodes[i].shape = "box";
            list.nodes[i].font = {
                color: "white",
                strokeWidth: 7,
                strokeColor: "black",
                size: 30,
            };
        } else {
            list.nodes[i].shape = "elipse";
            list.nodes[i].font = {
                color: "white",
                strokeWidth: 7,
                strokeColor: "black",
                size: 20,
            };
        }

        // sort out color
        list.nodes[i].color = list.nodes[i].c;

        // do titles
        list.nodes[i].title = list.nodes[i].label;
    }
    for (let i = 0; i < list.edges.length; i++) {
        list.edges[i].length = 200;
    }
    return list;
};
data = process_nodes(data);
let nodeArr = data.nodes;
let edgeArr = data.edges;
nodes = new vis.DataSet(nodeArr);
edges = new vis.DataSet(edgeArr);

let selectedNode;

data = { nodes: nodes, edges: edges };


// Set up glitches for unstable nodes
setInterval(() => {
    for (let i = 0; i < nodeArr.length; i++) {
        if (nodeArr[i].unstable && choice([true, true, true, false])) {
            /*
            if (choice([true, false])) {
                nodes.update([
                    { id: nodeArr[i].id, label: replace(nodeArr[i].label) },
                ]);
            } else {
                nodes.update([
                    { id: nodeArr[i].id, label: shuffle(nodeArr[i].label) },
                ]);
            }
            // */
            nodes.update([
                { id: nodeArr[i].id, label: shuffle(nodeArr[i].label) },
            ]);
        }
        if (nodeArr[i].id == selectedNode) {
            document.getElementById("title").innerText = nodes.get(nodeArr[i].id).label;

        }
    }
}, 50);

function destroy() {
    if (network !== null) {
        network.destroy();
        network = null;
    }
}

function draw() {
    destroy();
    // create a network
    let container = document.getElementById("mynetwork");
    let options = {
        autoResize: true,
        physics: {
            repulsion: {
                centralGravity: 0.2,
                springLength: 200,
                springConstant: 0.05,
                nodeDistance: 150,
                damping: 0.09
            },
        },
        height: window.innerHeight + "px",
        width: window.innerWidth + "px",
        layout: { randomSeed: seed }, // just to make sure the layout is the same when the locale is changed
        locale: "en",
        /*
        manipulation: {
            addNode: function (data, callback) {
                // filling in the popup DOM elements
                document.getElementById("node-operation").innerText = "Add Node";
                editNode(data, clearNodePopUp, callback);
            },
            editNode: function (data, callback) {
                // filling in the popup DOM elements
                document.getElementById("node-operation").innerText = "Edit Node";
                editNode(data, cancelNodeEdit, callback);
            },
            addEdge: function (data, callback) {
                if (data.from == data.to) {
                    let r = confirm("Do you want to connect the node to itself?");
                    if (r != true) {
                        callback(null);
                        return;
                    }
                }
                document.getElementById("edge-operation").innerText = "Add Edge";
                editEdgeWithoutDrag(data, callback);
            },
            editEdge: {
                editWithoutDrag: function (data, callback) {
                    document.getElementById("edge-operation").innerText =
                        "Edit Edge";
                    editEdgeWithoutDrag(data, callback);
                },
            },
        },
        // */
    };
    network = new vis.Network(container, data, options);
    let zoom_state = false;
    network.on('click', function (properties) {
        let ids = properties.nodes;
        let clickedNodes = nodes.get(ids);
        if (clickedNodes.length > 0) {
            selectedNode = clickedNodes[0].id;
            //focus_(selectedNode, network);
            zoom_state = true;
            set(clickedNodes[0]);
        } else {
            if (zoom_state) {
                //focusReset(network);
                zoom_state = false;

            }
            selectedNode = null;
            clear();
        }
    });
}

/*
function editNode(data, cancelAction, callback) {
    document.getElementById("node-label").value = data.label;
    document.getElementById("node-saveButton").onclick = saveNodeData.bind(
        this,
        data,
        callback
    );
    document.getElementById("node-cancelButton").onclick =
        cancelAction.bind(this, callback);
    document.getElementById("node-popUp").style.display = "block";
}

// Callback passed as parameter is ignored
function clearNodePopUp() {
    document.getElementById("node-saveButton").onclick = null;
    document.getElementById("node-cancelButton").onclick = null;
    document.getElementById("node-popUp").style.display = "none";
}

function cancelNodeEdit(callback) {
    clearNodePopUp();
    callback(null);
}

function saveNodeData(data, callback) {
    data.label = document.getElementById("node-label").value;
    clearNodePopUp();
    callback(data);
}

function editEdgeWithoutDrag(data, callback) {
    // filling in the popup DOM elements
    document.getElementById("edge-label").value = data.label;
    document.getElementById("edge-saveButton").onclick = saveEdgeData.bind(
        this,
        data,
        callback
    );
    document.getElementById("edge-cancelButton").onclick =
        cancelEdgeEdit.bind(this, callback);
    document.getElementById("edge-popUp").style.display = "block";
}

function clearEdgePopUp() {
    document.getElementById("edge-saveButton").onclick = null;
    document.getElementById("edge-cancelButton").onclick = null;
    document.getElementById("edge-popUp").style.display = "none";
}

function cancelEdgeEdit(callback) {
    clearEdgePopUp();
    callback(null);
}

function saveEdgeData(data, callback) {
    if (typeof data.to === "object") data.to = data.to.id;
    if (typeof data.from === "object") data.from = data.from.id;
    data.label = document.getElementById("edge-label").value;
    clearEdgePopUp();
    destroy;
    callback(data);
}
// */

function init() {
    draw();
}