import React, { useEffect } from 'react';
function PacketLatencyComponent() {
    useEffect(() => {
      const socket = new WebSocket('ws://localhost:55455');
  
      socket.onopen = () => {
        console.log('WebSocket connection established');
      };
  
      socket.onmessage = (event) => {
        const packet = JSON.parse(event.data);
        const packetTimestamp = packet.data.timestamp;
        const currentTimestamp = Date.now();
        const latency = currentTimestamp - packetTimestamp;
        console.log(Packet latency: ${latency}ms);
      };
  
      return () => {
        socket.close();
      };
    }, []);
  
    return (
      <div>
       <PacketLatencyComponent />
      </div>
    );
  }
  
  export default PacketLatencyComponent;
  
  