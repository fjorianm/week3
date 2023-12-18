// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract DataConsumerV3 {
    AggregatorV3Interface internal BTC_USD;
    AggregatorV3Interface internal ETH_USD;
    AggregatorV3Interface internal LINK_USD;
    AggregatorV3Interface internal BTC_ETH;

    /**
     * Network: Sepolia
     * Aggregator: BTC/USD
     * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
     */
    constructor() {
        BTC_USD = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);
        ETH_USD = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        LINK_USD = AggregatorV3Interface(0xc59E3633BAAC79493d908e63626716e204A45EdF);
        BTC_ETH = AggregatorV3Interface(0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22);
    }

    /**
     * Returns the latest answer.
     */
    function getChainlinkDataFeedLatestAnswer(string memory _input) public view returns (int) {
        if (compareStrings(_input, "BTC/USD")) {
            (
                /* uint80 roundID */,
                int answer,
                /* uint startedAt */,
                /* uint timeStamp */,
                /* uint80 answeredInRound */
            ) = BTC_USD.latestRoundData();
            return answer;
        } else if (compareStrings(_input, "ETH/USD")) {
            (
                /* uint80 roundID */,
                int answer,
                /* uint startedAt */,
                /* uint timeStamp */,
                /* uint80 answeredInRound */
            ) = ETH_USD.latestRoundData();
            return answer;
        } else if (compareStrings(_input, "LINK/USD")) {
            (
                /* uint80 roundID */,
                int answer,
                /* uint startedAt */,
                /* uint timeStamp */,
                /* uint80 answeredInRound */
            ) = LINK_USD.latestRoundData();
            return answer;
        } else if (compareStrings(_input, "BTC/ETH")) {
            (
                /* uint80 roundID */,
                int answer,
                /* uint startedAt */,
                /* uint timeStamp */,
                /* uint80 answeredInRound */
            ) = BTC_ETH.latestRoundData();
            return answer;
        } else {
            // Handle unsupported input
            revert("Unsupported data feed");
        }
    }

    /**
     * Compare two strings.
     */
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}
