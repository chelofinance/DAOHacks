import * as React from "react";
import Box from "@mui/material/Box";
import {getWeb3} from "../../helpers";
import {createWrapper, setWrapper} from "../../helpers/aragon";
import {getNetworkConfig} from "../../helpers/network";

const Home = () => {
    const connectWrapper = async () => {
        const web3 = getWeb3();
        const dao = "quicklend"; //dao name
        const curNetwork = getNetworkConfig("rinkeby"); //network config
        const wrapper = setWrapper(
            await createWrapper(`${dao}.aragonid.eth`, curNetwork.addresses.ensRegistry, {
                ipfsConf: curNetwork.apm.ipfs,
                provider: getWeb3(curNetwork.nodes.defaultEth).currentProvider,
                accounts: await web3.eth.getAccounts(),
            })
        );
        console.log({wrapper});
    };

    React.useState(() => {
        connectWrapper();
    }, []);

    return (
        <div className="home">
            <Box sx={{bgcolor: "#cfe8fc", height: "100vh"}} />
        </div>
    );
};

export default Home;
