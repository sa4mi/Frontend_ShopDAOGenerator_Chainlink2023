import { DAODataType } from "../types/DAOdata";
export const DAOData: DAODataType = {
  id: "0",
  name: "DAO Name",
  storeUrl: "https://sample.myshopify.com/",
  symbol: "DAO",
  stats: { proposals: 3, holders: 3, voters: 3 },
  proposals: [
    {
      status: "EXECUTED",
      title:
        "[EP3.5] [Executable] Activate new .eth Controller and Reverse Registrar",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
    {
      title: "Proposal 2",
      status: "EXECUTED",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
    {
      title: "Proposal 3",
      status: "EXECUTED",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
  ],
  contractParameters: {
    proposalThreshold: 0,
    quorumNeeded: "11.85M",
    proposalDelay: "a few seconds",
    votingPeriod: "5 hours",
    governor: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
    token: "0x4200000000000000000000000000000000000042",
    timelock: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
  },
};

export const DAODataList: DAODataType[] = [
  {
    id: "0",
    name: "DAO Name",
    storeUrl: "https://google.com",
    symbol: "DAO",
    stats: { proposals: 3, holders: 3, voters: 3 },
    proposals: [
      {
        status: "EXECUTED",
        title:
          "[EP3.5] [Executable] Activate new .eth Controller and Reverse Registrar",
        id: "429737...8242",
        date: "Mar 29th, 2023",
        description: "Proposal executed",
      },
      {
        title: "Proposal 2",
        status: "EXECUTED",
        id: "429737...8242",
        date: "Mar 29th, 2023",
        description: "Proposal executed",
      },
      {
        title: "Proposal 3",
        status: "EXECUTED",
        id: "429737...8242",
        date: "Mar 29th, 2023",
        description: "Proposal executed",
      },
    ],
    contractParameters: {
      proposalThreshold: 0,
      quorumNeeded: "11.85M",
      proposalDelay: "a few seconds",
      votingPeriod: "5 hours",
      governor: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
      token: "0x4200000000000000000000000000000000000042",
      timelock: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
    },
  },
  {
    id: "1",
    name: "DAO Name 1",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DAO1",
    stats: { proposals: 3, holders: 5, voters: 7 },
    proposals: [
      {
        status: "EXECUTED",
        title:
          "[EP1.5] [Executable] Activate new .eth Controller and Reverse Registrar",
        id: "0x3a3777a150d2465567e5b600a7be8b198ee2b469",
        date: "Mar 29th, 2023",
        description: "Proposal executed",
      },
      {
        status: "FAILED",
        title: "Proposal 2",
        id: "0x8f41f1707199ee0387f42a858d2aeca7a99c88a1",
        date: "Mar 28th, 2023",
        description: "Proposal failed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 3",
        id: "0xb206b15d24cf760c01da2a2a85d5b2b05e6a6f48",
        date: "Mar 27th, 2023",
        description: "Proposal is active",
      },
    ],
    contractParameters: {
      proposalThreshold: 1,
      quorumNeeded: "5.85M",
      proposalDelay: "10 minutes",
      votingPeriod: "6 hours",
      governor: "0x3a3777a150d2465567e5b600a7be8b198ee2b469",
      token: "0x8f41f1707199ee0387f42a858d2aeca7a99c88a1",
      timelock: "0xb206b15d24cf760c01da2a2a85d5b2b05e6a6f48",
    },
  },
  {
    id: "2",
    name: "DAO Name 2",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DAO2",
    stats: { proposals: 4, holders: 6, voters: 8 },
    proposals: [
      {
        status: "ACTIVE",
        title: "[EP2.5] [Executable] Modify .eth Controller settings",
        id: "0x1a3777a150d2465567e5b600a7be8b198ee2b469",
        date: "Apr 29th, 2023",
        description: "Proposal is active",
      },
      {
        status: "FAILED",
        title: "Proposal 5",
        id: "0x5f41f1707199ee0387f42a858d2aeca7a99c88a1",
        date: "Apr 28th, 2023",
        description: "Proposal failed",
      },
      {
        status: "EXECUTED",
        title: "Proposal 6",
        id: "0x9b206b15d24cf760c01da2a2a85d5      b2b05e6a6f48",
        date: "Apr 27th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 7",
        id: "0x0a6b15d24cf760c01da2a2a85d5b2b05e6a6f48",
        date: "Apr 26th, 2023",
        description: "Proposal is active",
      },
    ],
    contractParameters: {
      proposalThreshold: 2,
      quorumNeeded: "6.85M",
      proposalDelay: "15 minutes",
      votingPeriod: "7 hours",
      governor: "0x1a3777a150d2465567e5b600a7be8b198ee2b469",
      token: "0x5f41f1707199ee0387f42a858d2aeca7a99c88a1",
      timelock: "0x9b206b15d24cf760c01da2a2a85d5b2b05e6a6f48",
    },
  },
  {
    id: "3",
    name: "CommerceDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "CDAO",
    stats: { proposals: 6, holders: 50, voters: 30 },
    proposals: [
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 2",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 29th, 2023",
        description: "Proposal is active",
      },
      {
        status: "EXECUTED",
        title: "Proposal 3",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 28th, 2023",
        description: "Proposal executed",
      },
      {
        status: "FAILED",
        title: "Proposal 4",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 27th, 2023",
        description: "Proposal failed",
      },
      {
        status: "EXECUTED",
        title: "Proposal 5",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 26th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 6",
        id: "0xb8c57f570c1da6c406fa7595bf61468e5865db39",
        date: "Apr 25th, 2023",
        description: "Proposal is active",
      },
    ],
    contractParameters: {
      proposalThreshold: 5,
      quorumNeeded: "5.10M",
      proposalDelay: "30 minutes",
      votingPeriod: "9 hours",
      governor: "0x2a489f78ae73f522631d78e750bc0e4dd36a0f35",
      token: "0x6f63e65ea92a2233859b024c92c340d59d17b134",
      timelock: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    },
  },
  {
    id: "4",
    name: "TradeDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "TDAO",
    stats: { proposals: 7, holders: 100, voters: 80 },
    proposals: [
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0x28ea5eb1bc53f3852158a46416341e9873c79d41",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
    ],
    contractParameters: {
      proposalThreshold: 8,
      quorumNeeded: "7.10M",
      proposalDelay: "1 hour",
      votingPeriod: "10 hours",
      governor: "0x4b489f78fe73f522671d78f350bc1e4dd39a0f44",
      token: "0x7f53e69ea92b2233859b024c93c350d59d17b154",
      timelock: "0xa83f8d60db89ea8ca4eb9968c7aff8cfa05b3c73",
    },
  },
  {
    id: "5",
    name: "RetailDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "RDAO",
    stats: { proposals: 2, holders: 120, voters: 110 },
    proposals: [
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0x329e5eb1bc58f2852159a46916342e9873c79d53",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 2",
        id: "0x329e5eb1bc58f2852159a46916342e9873c79d53",
        date: "Apr 29th, 2023",
        description: "Proposal is active",
      },
    ],
    contractParameters: {
      proposalThreshold: 8,
      quorumNeeded: "7.10M",
      proposalDelay: "1 hour",
      votingPeriod: "10 hours",
      governor: "0x4b489f78fe73f522671d78f350bc1e4dd39a0f44",
      token: "0x7f53e69ea92b2233859b024c93c350d59d17b154",
      timelock: "0xa83f8d60db89ea8ca4eb9968c7aff8cfa05b3c73",
    },
  },
  {
    id: "6",
    name: "DigitalDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DDAO",
    stats: { proposals: 0, holders: 200, voters: 180 },
    proposals: [],
    contractParameters: {
      proposalThreshold: 10,
      quorumNeeded: "10.10M",
      proposalDelay: "2 hours",
      votingPeriod: "12 hours",
      governor: "0x5b689f78fe73f522671d78f350bc1e4dd49a0f55",
      token: "0x8f74e65ea92b2233859b024c93c350d59d17b164",
      timelock: "0xb93f9d60db89ea8ca4eb9968c7aff8cfa06b3c83",
    },
  },
  {
    id: "7",
    name: "GlobalDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "GDAO",
    stats: { proposals: 12, holders: 300, voters: 280 },
    proposals: [
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 2",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 29th, 2023",
        description: "Proposal is active",
      },
      {
        status: "FAILED",
        title: "Proposal 3",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 28th, 2023",
        description: "Proposal failed",
      },
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
      {
        status: "ACTIVE",
        title: "Proposal 2",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 29th, 2023",
        description: "Proposal is active",
      },
      {
        status: "SUCCESS",
        title: "Proposal 3",
        id: "0x48da5eb1bc58f3852159a46916344e9873c79d73",
        date: "Apr 28th, 2023",
        description: "Proposal failed",
      },
    ],
    contractParameters: {
      proposalThreshold: 12,
      quorumNeeded: "12.10M",
      proposalDelay: "3 hours",
      votingPeriod: "14 hours",
      governor: "0x6b889f78fe73f522671d78f350bc1e4dd59a0f66",
      token: "0x9f84e65ea92b2233859b024c93c350d59d17b174",
      timelock: "0xc93f9d60db89ea8ca4eb9968c7aff8cfa07b3c93",
    },
  },
  {
    id: "8",
    name: "GlobalBigPPDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "GBigPP",
    stats: { proposals: 12, holders: 300, voters: 280 },
    proposals: [],
    contractParameters: {
      proposalThreshold: 12,
      quorumNeeded: "12.10M",
      proposalDelay: "3 hours",
      votingPeriod: "14 hours",
      governor: "0x6b889f78fe73f522671d78f350bc1e4dd59a0f66",
      token: "0x9f84e65ea92b2233859b024c93c350d59d17b174",
      timelock: "0xc93f9d60db89ea8ca4eb9968c7aff8cfa07b3c93",
    },
  },
];
