module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            // gas: 5000000,
            // from: '0x410ab692eaff5f43c9b71572ddc6681077512558',
            network_id: "*" // Match any network id
        },
        dev: {
            host: "192.168.1.164",
            port: 8545,
            gas: 4000000,
            from: "0x749fb95a7f938c3e4d4ab71e35f48cdf35556a94",
            network_id: "*" // Match any network id
        },
        test: {
            host: "140.143.38.209",
            port: 8545,
            gas: 4000000,
            from: "0x77446f036e90b866566770a7e742e72df2f934bd",
            network_id: "*" // Match any network id
        }
    }
};
