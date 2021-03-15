module.exports = {
  new: function(connection, connections) {
    const id = this.getUUID();
    connection.connectionId = id;
    connections[id] = connection;
    console.log(`client connected with connectionId: ${id}`);
    return id, connections;
  },
  getUUID: function() {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return s4() + s4() + "-" + s4();
  }
};

// ws.on("message", message => {
//   console.log("received: %s", message);
//   handleMessage(ws, message);
// });
// module.exports = {
//   new: function(connection) {
//     const id = this.getUUID();
//     connection.connectionId = id;
//     return id;
//   },
//   getUUID: function() {
//     const s4 = () =>
//       Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
//     return s4() + s4() + "-" + s4();
//   }
// };
