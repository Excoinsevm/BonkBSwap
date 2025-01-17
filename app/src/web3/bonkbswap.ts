export type Bonkbswap = {
  "version": "0.0.0",
  "name": "bonkbswap",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonkbMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkbswapAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "PoolBumps"
          }
        },
        {
          "name": "rate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyToken",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkbswapAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sellToken",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkbswapAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRate",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bonkbswapAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rate",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bonkbSwapAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "PoolBumps"
            }
          },
          {
            "name": "bonkbMint",
            "type": "publicKey"
          },
          {
            "name": "wsolMint",
            "type": "publicKey"
          },
          {
            "name": "poolBonkb",
            "type": "publicKey"
          },
          {
            "name": "poolWsol",
            "type": "publicKey"
          },
          {
            "name": "poolOwner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PoolBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolBonkb",
            "type": "u8"
          },
          {
            "name": "poolWsol",
            "type": "u8"
          },
          {
            "name": "poolOwner",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyTokenEvent",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "SellTokenEvent",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "LowWSol",
      "msg": "Insufficient WSOL"
    },
    {
      "code": 301,
      "name": "LowMacro",
      "msg": "Insufficient Bonkb tokens"
    }
  ]
};

export const IDL: Bonkbswap = {
  "version": "0.0.0",
  "name": "bonkbswap",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonkbMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkbswapAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "PoolBumps"
          }
        },
        {
          "name": "rate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyToken",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkbSwapAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sellToken",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolBonkb",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "BonkbswapAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRate",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "BonkbSwapAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rate",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bonkbSwapAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "PoolBumps"
            }
          },
          {
            "name": "bonkbMint",
            "type": "publicKey"
          },
          {
            "name": "wsolMint",
            "type": "publicKey"
          },
          {
            "name": "poolBonkb",
            "type": "publicKey"
          },
          {
            "name": "poolWsol",
            "type": "publicKey"
          },
          {
            "name": "poolOwner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PoolBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolBonkb",
            "type": "u8"
          },
          {
            "name": "poolWsol",
            "type": "u8"
          },
          {
            "name": "poolOwner",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyTokenEvent",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "SellTokenEvent",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "LowWSol",
      "msg": "Insufficient WSOL"
    },
    {
      "code": 301,
      "name": "LowBonkb",
      "msg": "Insufficient Bonkb tokens"
    }
  ]
};
