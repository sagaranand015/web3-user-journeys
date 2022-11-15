### Web3-Journeys

Web3-Journeys is a project that aims to implement cross-chain web3 user journeys for all transactions and actions done by the user with various other individuals and institutions. This projects gives an insightful report into everything you do on blockchain in a cross chain fashion. 

### Project Plan
We plan to achieve user journeys for all transactions for any user, supplemented with a reporting dashboard for an overall insight into cross-chain fund transactions, ENS trnsactions, social transactions and so on. The project will have a dashboard and a journey page integrated to guide user through the various transaction stats. 

### User Workflows
1. A User Journey Page: A Page should describes the various trnsactions based on a predefined JSON based Metadata schema as defined by RSS3
2. [TODO]Dashboard: A Dashboard page should high level overview of all the transactions done by the user on any given chain. Also, show stats for various other transactions including count, count per chain, networks interacted with and so on.

### Users' Actions defined in the project (by tag)
RSS3 response payloads have categorized user actions by tags, with each tag further subdivided into types. Following is the list of tags that show define a user journey, with every type of transaction (within a tag) defining a step in the journey. 

1. *Transactions Tag*: Various types (steps in the user journey) for Transactions tag are defined below with reference to the sample payloads:\
    a. Transfer: A Simple Transfer transaction from one address to another. Sample payload [is available here](./data-schemas/transaction_transfer.json)\
    b. Mint: A Sample Mint Transaction from an address to some contract address that is able to mint tokens. Sample payload [is available here](./data-schemas/transaction_mint.json)\
    c. Burn: A Simple Burn Transaction from an address to some contract address that is able to burn tokens. \

2. *Exchange Tag*: Various types (steps in the user journey) for Exchange tag are defined below with reference to sample payloads:\
    a. Deposit:\
    b. Withdraw:\ 
    c. Swap: Indicates a token swapping on a DEX. Sample Payload [is available here](./data-schemas/exchange_swap.json)\
    d. Liquidity: Indicates an aciton of adding/removing assets to/from a liquidity pool. Sample Payload [is available here](./data-schemas/exchange_liquidity.json)\
    e. Bridge:\

3. *Collectible Tag*: Various types (steps in the user journey) for Collectible tag are defined below with reference to sample payloads:\
    a. Transfer: A Simple Transfer action of a collectible\
    b. Mint: A Simple Minting action of a collectible. Sample Payload [is available here](./data-schemas/collectible_mint.json)\
    c. Burn: A Simple Burn action of a collectible\

4. *Donation Tag*: Various types (steps in the user journey) for Donation tag are defined below with reference to sample payloads:\
    a. Launch: Indicates an action of launching a new grant.\
    b. Donate: Indicates a token transfer to an established grant. Sample payload [is available here](./data-schemas/donation_donate.json)\

## Live App Demo
https://willowy-melomakarona-76b962.netlify.app

## Demo Video
https://youtu.be/v__-cDYhN2Y

