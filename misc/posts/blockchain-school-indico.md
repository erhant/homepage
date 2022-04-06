---
title: "EuroCC Blockchain School"
excerpt: "My notes from the 3-day Blockchain Course by EuroCC - INDICO"
date: "2020-03-16T05:35:07.322Z"
---

All slides and videos are online in the Indico page and YouTube.

- **1 - Blockchain 1.0** by Pelin Angın from METU ([slides](https://indico.truba.gov.tr/event/69/contributions/488/attachments/156/349/G1D1-Blokzincir_1.0-Pelin_Angin.pdf) | [video](https://www.youtube.com/watch?v=8BrfVvFYkgQ))
- **2 - Consensus Algorithms** by Murat Osmanoğlu from Ankara University ([slides](https://indico.truba.gov.tr/event/69/contributions/489/attachments/157/350/G1D2-Uzlasi_Protokolleri-Murat_Osmanoglu.pdf) | [video](https://youtu.be/U6pMBh3L5s4))
- **3 - Cryptocurrencies** by Enis Karaarslan from MSKU ([slides](https://indico.truba.gov.tr/event/69/contributions/490/attachments/158/353/G2D1-Token_Ekonomileri-Enis_Karaarslan.pdf) | [video](https://youtu.be/R5UXipsmOgg))
- **4 - Privacy in Blockchain** by Murat Osmanoğu from Ankara University ([slides](https://indico.truba.gov.tr/event/69/contributions/491/attachments/159/352/G2D2-Blokzincirde_Mahremiyet-Murat_Osmanoglu.pdf) | [video](https://youtu.be/SKgUu7-N4co))
- **5 - Smart Contracts & Ethereum** by Kamer Kaya from Sabancı University ([slides](https://indico.truba.gov.tr/event/69/contributions/492/attachments/160/354/G3D1-Smart_Contracts_and_Ethereum-Kamer_Kaya.pdf) | [video](https://youtu.be/EvFLcCb66yk))
- **6 - Web3.0 & Metaverse** by Murat Ak from Akdeniz University ([slides](https://indico.truba.gov.tr/event/69/contributions/493/attachments/161/355/G3D2-Web3_Metaverse-Murat_Ak.pdf) | [video](https://youtu.be/S0bXzDB3jJU))

See the event link [here](https://indico.truba.gov.tr/event/69/).

---

# Blockchain 1.0

Blockchain 1.0 refers prior to smart contracts. Bitcoin is the first actual application of blockchain.

Blockchain was invented as a solution, but people created problems for it. However, those problems have easier solutions without blockchain most of the time.

Block chain is seen as the 5th disruptive tech (mainframes, PC, internet, social media).

Block chain is a distributed ledger (kayit defteri) that is shared and controlled by a group of independent parties. This is not necessarily based on trust.

Blockchain is able to ensure trust without a central authority, using cryptography to manage data in a secure way.

Blockchain provides:

- Protection from revision and tampering.
- Non-repudations. (bir sey yaptiysaniz, onu yaptiginizi inkar edemiyorsunuz)
- Pseudonymity. (tam anonimlik degil yani)
- Records of all transactions, and a continuously growing list of records.
- Upon a new transaction, blockchain is validated across distributed network before including transaction as next block in the chain (i.e., distributed consensus). There are several algorithms, and bitcoin uses _Proof-of-Work_.
- Blocks made by **miners** coming to agreement on which transactions fit in each block, and which block will be the next in the chain.

Types of blockchain:

- **Public (e.g. Bitcoin)**: Large distribtued open networks, also open source
- **Permissioned**: People may control roles individuals can play within the network. Code may or may not be open source.
- **Private**: Smaller, do no utilize a token. Membership closely controlled.

Once upon a time, there were attempts for cryptocurrencies (with centralized transaction systems) such as Beenz, Flooz, E-Gold, DigiCash...
Most of these fell victim to double-spending: digital money transactions could be copied, resulting in spending the same money twice. (ayni paranin birden fazla kez harcanabilmesi)

Bitcoin solves double-spending, which is one of its most important aspects. You cant spend a money twice in bitcoin, because all transactions are recorded in the chain.

# Bitcoin

Bitcoin came in 2009, with "Bitcoin: A Peer-to-Peer Electronic Cash System" by mysterious Satoshi Nakamoto. Described as: _a system for electronic transactions without relying on trust_.

_April 2010_: BitcoinMarket.com opened, as the first online marketplace.

_May 2010_: First real-world transaction using Bitcoin, purchasing two pizzas for 10,000 BTC.

_August 2010_: First and only major security flaw in Bitcoin identified, protocol updated an all network computers are updated to new version.

Every node in the network stores a copy of the transaction history, so there are like millions of copies. This is indeed a storage problem, later blockchain systems address this problem (side-chain, off-chain etc.).

## Security Aspects

- **Authentication**: Am i paying the right person, not some other impersonator?
  - Ensured by Public Key Cryptography: Digital SIgnatures
- **Integrity**: Is the coin double-spent, can an attacker reverse or change transactions?
  - Ensured by Digital Signatures and Hash
- **Availability**: Can I make a transaction anytime I want?
  - Ensured by P2P Broadcast
- **Confidentiality**: Are my transactions private or anonymous?
  - Public keys

Decisions are made by voting (50% + 1 wins!). Voting requires proof-of-work, and it is unlikely that a single person/group will outvote the majority of users.

Due to well-defined statistical properties of cryptographic hash, it is possible to estimate how many guesses it took, given the answer. Miners earn BTC when they win the transaction lottery.

## How does a Blockchain Work?

1. Someone requests a transaction.
2. The requested transaction is broadcast to a P2P network consisting of nodes.
3. Network of nodes validate the transactions. The transaction can involve cryptocurrency, contracts, records etc. This is the **Validation** step.
4. Once verified, the transaction is combined with other transactions to create a new block of data for the ledger.
5. The new block is added to the existing blockchain, in a way that it is permanent and unalterable.
6. The transaction is complete!

In a distributed ledger, the names are not like "Erhan" and stuff but instead their names are the public keys of the node. This provides pseudonymity.

- A bitcoin transfer is `sign(previous_transaction + new_owners_public_key)`.
- Anyone can verify `(n-1)th` owner transferred this to the nth owner.
- Anyone can follow the history given a Bitcoin.
- Bitcoin uses Elliptic Curve Cryptography (due to its key strength and shorter keys) and SHA256.
- Quantum computers are scary as they might break these encryptions. See post-quantum cryptography for more.

Signatures prove who sent the transaction, but not when. So we need to establish a transaction ordering to determine who should get paid. The network decides this themselves.

See blockchain.info to look at the anatomy of a block.

_NOT_: In a mining pool, miners solve the math puzzle ina collaborative effort. They find the correct nonce together, and the reward is shared.

_NOT_: See "eventual consistency" for the tie-breaking thing in blockchain.

## Cryptographic Hash Functions

Hash functions (ozet fonksiyonlari) are:

- **Consistent**: $H(x)$ always yields the same result.
- **One-way**: Given $y$, it is hard to find $x$ s.t. $H(x)=y$.
- **Collision resistant**: Given $H(w)=z$, it is hard to find $x$ such that $H(x)=z$.

## Transaction Confirmation

Coins are not considered mature until there have been 6 confirmations. (around an hour assuming a 10 minute block cadence)

New coins created by the mining process are not valid until about 120 confirmations.

This assures that a node with more than 51% of the total hash-power does not pull of fraudulent transactions.

[Bitcoin Paper](https://bitcoin.org/bitcoin.pdf)

---

# Consensus

**What is consensus?** It is a mechanism executed among nodes in the blockchain network to achieve an agreement on the current state of the ledger.

Two properties should be satisfied:

- **safety**: all nodes agree on total order of transactions appended to the blockchain
- **liveness**: all transactions shared in the network will be eventually appended to the blockchain

Nodes failure cases:

- **crash**: nodes my fail to execute the protocol due to some hardware or software problem
- **byzantine**: nodes may deviate from the protocol to sabotage the consensus (fraudulent!)

Two types of blockchain:

- **permissionless**:
  - permission not required to register in the system
  - users represented pseudonymially
  - anyone in the network can access to all transactions, create them, and take part in consensus
- **permissioned**
  - users should get permission from some authority
  - users present valid identities in the system
  - specific actions may be restricted to certain users

## Classical Consensus Protocols

We will first go over some classical protocols in distributed systems.

### Viewstamped Replication (VR) \[Oki & Liskov 1988\]

A server replication that handles server crashes.

Assumes:

- nodes can fail independently

Objectives:

- **safety**: all non-faulty replicas agree on the total order for the execution of requests, despite the failures
- **liveness**: clients eventually recieve replies to their requests

Provides both in at most $f$ failures in a system with $2f+1$ nodes.

The replicas move through a succession of configurations called views. In a view, one replica will be the primary and the others are backups. Nodes are sorted by their IP, each one assigned to the corresponding view as primary.

### Raft Protocol \[Ongaro & Ousterhour\ 2014\]

Similar to VR, handles server crashes. Details omitted for brevity.

### PBFT \[Castro & Liskov 1999\]

A server replication system that can tolerate Byzantine faults! Note that the previous ones could not do this.

PBFT stands for "Practical Byzantine-Fault Tolerance".

Assumes:

- nodes can fail independently
- there is a very strong adversary that can coordinate faulty nodes, delay communication, or delay correct nodes
- the adversary is computationally bound:
  - cannot produce a valid signature of a non-faulty node
  - cannot compute an input of the hash function from the output
  - cannot find two messages with the same hash value

Objective:

- the algorithm provides safety and liveness assuming no more than $m$ Byzantine faulty replicas when there are $3m+1$ replicas in total.

### RBFT \[Aublin et al. 2013\]

PBFT can tolerate Byzantine faults, but malicious primaries can still damage the protocol for $f$ consecutive views in the worst case.

RBFT basically runs PBFT in parallel on multiple instances.

### Consensus Protocols for Blockchain

Depending on the methods employed to select leaders to generate blocks, or to vote newly generated blocks, protocols are analyzed here under two categories:

- **lottery-based consensus protocol**
  - leaders are randomly selected with a probabilitiy in proportion to its computing power or stake
  - newly created blocks appended to the chain without BFT type voting mechanism
  - block finalization is probablistic
  - more used in public blockchains
- **voting-based consensus protocol**
  - leaders determined by simpler methods (round-rabin vs.)
  - newly created blocks appended to the chain with BFT type voting mechanism
  - block finalization is deterministic
  - more used in private blockchains

## Lottery-based Protocols

### Proof of Work: Nakamoto Consesus Protocol

The name is to respect Satoshi Nakamoto, and this consensus is based on Proof-of-Work.

The leader is chosen with respect to its computing power, which is proven by its capability to solve a puzzle: find an `x` for some transaction collection `txs` such that `SHA256(txs, x) < T` for some `T`. In other words, find a hash result with some amount of leading bits to be 0.

The `T` parameter is chosen by the system itself. The smaller it is, the harder this puzzle becomes. Every 2016 blocks, the `T` is adjusted to keep the block time interval 10 minutes.

You can think that the chance of a node winning the leadership lottery is kind of equal to how many `x`'s it can try in a second.

There may be _forking_ issues, where multiple leaders can win the puzzle, and thus multiple blocks may exists at the same. In those cases, the longest chain is used to resolve the forking. The reason: more blocks mean more computing power was used there.

What about safety and liveness? Here is how \[Garay & Kiayias\] define them for blockchain:

- **persistence**: once a transaction is recorded more than k blocks deep in the blockchain of one honest node, then it will be included in every honest nodes with a very high probability
- **liveness**: all transactions shared by honest nodes will eventually be placed more than k blocks deep in the blockchain of a honest node's chain

Nakamoto protocol provides these (proven formally) if:

- adversary controls a minority of the total hashing power in the network (not majority)
- digital signature scheme unforgeable
- network synchronizes much faster relative to the proof-of-work solution rate

#### Problems with Nakamoto

If an attacker gains majority of the hashing power, it can:

- rewrite some part of the chain
- damage the network by delaying or censoring transactions
- perform double-spending (very bad!)

\[Bonneau\] showed that an adversary can gain cotrol the majority by renting others' hash power. For example see <https://nicehash.com>. Also see <https://crypto51.app> to see the cost of proof-of-work 51% attack cost.

Ethereum Classic and Bitcoin Gold mostly suffer from these kind of attacks!

Another problem with Nakamoto consensus is that the transaction per second is slow: around 4-5 tps. (Visa can process more than 24k)

Two solutions can increase tps: decrease the block time interval or increase the block size. However, both can cause _forking_ problem.

An alternative to longest chain rule is the Ghost protocol \[Sompolinsky & Zohar 2015\].

_NOT:_ Halving is important to note. Around every 4 years, the bitcoin reward for the mining is halved. This is to prevent inflation. The halving will continue until the reward is less than 1 Satoshi (a millionth of 1 BTC), which will be reached around year 2140.

**Coinbase** is a special transaction, that has no sender, but a reciever. This is to reward the miners.

A miner can earn $270k-290k when creating a valid block with bitcoin price $41k. This reward is a bit too nice, an incentivizes too many people to make investments on mining. As such, small players cant take part in mining, because big players invest a lot in this.

Small players can instead join together to make a mining pool. You can see these pools in [blockchain.com](blockchain.com). Turns out that if a few mining pools join powers, they have more than 51% hashing power.

Consequently, the mining becomes kind of centralized, and rich get richer.

Bitcoin consumes a lot of energy, and most of this is wasted.

### Proof of Stake

As an alternative, QuantumMechanic (a user in bitcoin forums) proposed in 2011: for the proportion, instead of computing power, why not use the amount of coins you can prove you own?

The reasoning is cool: instead of the ones with most computing power, the ones with most coins should be responsible of running the system. As such, if things go wrong they will suffer the most.

There were some hybrid (PoW + PoS) protocols around 2012, but we will skip them.

#### Chain of Activity \[Bentov et al. 2016\]

A pure proof-of-stake protocol that aims to prevent rational forks by which the only a single stakeholder identity can create the next block.

Two difficulties with pure proof-of-stake:

- fair initial distribution of the money supply to the parties. all coins are created at the beginning, instead of creating on the go (like bitcoin).
- network fragility if the nodes are rational, and many forks.

In Chain of Activity:

1. Time is divided into a sequence of segments called epoch
2. Each epoc is divided into $L$ discrete units, called slot
3. Each slot is associated with a single block that is generated by a single stakeholder
4. The identity of this stakeholder is fixed and publicly known

Leaders in an epoch are responsible of choosing the leaders in the next epoch too (`follow-the-satoshi` algorithm). This can be manipulated by attackers within the algorithm, so that the next leaders can be one of their own.

\[Aggelos et al.\] propose a better algorithm for that, and they call their method Ouroboros. This is actually used by Cardano (ADA).

The leaders during an epoch must be online to serve the requests, process transactions and contribute the election of slot leaders for the next epoch. If that leader is offline that is a problem. To solve this, **Delegated PoS** is proposed.

Multiple blockchains can coexist as they dont run the protocol in a coordinated way, and one can stake both chains. This is a problem called `nothing-at-stake`. We want a single long chain.

And yet again, rich get richer.

**Initial coin distribution** is a major problem too. It sounds like the initial members of the network who got the coins, are kind of like central part of this supposedly decentralized network. There are studies that argue the system is decentralized enough after some time passes and the coins are circulated.

## Voting-based Protocols

### Quorum

An adaptation of Ethereum to permissioned blockchain, developed by JP Morgan as an enterprise platform.

There are two consensus protocols commonly used in Quorum:

- a variant of Raft
- Istanbul BFT

#### Raft for Blockchain

- Leader combines the transactions it receives into a new block and send it to other nodes.
- Others check the block, and if it is valid, sends a message indicating they agree on the block
- If majority of the nodes send such message, leaders considers the block committed and notifies others
- Leader and other ndoes append the new block to their chain
- Unlike original Raft, leaders can remove offline followers or candidates from the committee (to be more liveness).

#### Istanbul BFT \[Moniz 2000\]

Kind of like PBFT for blockchain, with some modifications.

## Hyperledger: Voting-based Protocol

SImilar to Quorum, initiated by Linux Foundation and supported by IBM, Intel etc.

Hyperledger inlcudes different frameworks employing different consensus protocols (Raft for Fabric, Tendermint for Burrow, RBFT for Indy, etc.)

## Hybrid Consensus Protocols

We can perhaps take the best of both worlds:

- leaders chosen through a lottery-based election (establishing trust in the wild)
- blocks approved by a committee of nodes before being appended to the chain (provides determinstic block finalization)

### Peercensus \[Decker et al. 2016\]

It uses PoW + BFT.

- Block creators are chosen through Proof-of-Work.
- Blocks are approved by a committee of nodes before being appended to the chain, via a variant of PBFT - chain of agreement.

How are the committee members chosen?

- Block creators join the committee.
- The one created the last block will be the leader in the next view.

So in addition to the Nakamoto, a committee decides on the block addition in the end. If a member is offline during this voting, they are voted to be kicked out (for liveness).

The reward is distributed among the committee.

If more than $2/3$ of the committee is honest, Peercensus provides liveness and safety. However, the commitee size $K$ defines the message complexity $\mathcal{O}(k)$.

### Tendermint \[Kwon 2014\]

It uses PoS + BFT. Kind of similar to Peercensus, but uses PoS instead.

### Casper \[Buterin & Griffith 2017\]

Again, uses PoS + BFT.

Leaders who create the blocks are elected similar to traditional BFT. Casper protocol used to finalize blocks by selecting a unique chain in every $k$ blocks. This may be the next step of Ethereum.

Provides safety and liveness if the validators following the protocol hold more than $2/3$ of the voting power.

---

# Cryptocurrencies

Cryptocurrency keys are in WIF (Wallet Import Format). The public key is constructed from the private key, which becomes your wallet address. This creation uses few hashes.

See <https://walletgenerator.net>.

An example money transfer:

- Alice says "I will pay 500$" and signs this with her private key.
- The signed message can be verified with her public key at the receiver Bob.

Wallet Types:

- **Custodial (non-wallets)**: Kraken, Binance, Bittrex, belo, buenbit
- **Self-Custodial**
  - **Hot Wallets**: Metamask, Exodus, Trust Wallet
  - **Smart Contract Wallets**: argent
  - **Warm Wallets**: muun
  - **Cold Wallets**:
    - **Paper Wallet**: print qr codes
    - **Hardware Wallet**: Trezor, Ledger

_NOT:_ If any custodial wallet is giving away gifts and stuff, better be staying away from there.
_NOT:_ If can afford, buying an hardware wallet is the best option.
_NOT:_ Ozgur Demirtas works on the financial aspect of cryptocurrencies, you might check him out too.

## Coin vs Token

| Coin                                             | Token                                          |
| ------------------------------------------------ | ---------------------------------------------- |
| A digital currency similar to physical currency  | A digital asset issued on a particular project |
| Operates on its own blockchain with its protocol | Does not operate on blockchain                 |
| Purely used as a source of payment               | Used for payment or signing digital agreement  |

_NOT:_ [Shermin Voshmgir - Token Economy: The End of Money as we know it?](https://www.youtube.com/watch?v=hyMMl33w1z0)

_NOT:_ Ethereum has Smart Contracts (written in Solidity) that makes decentralized applications.

_NOT:_ The speaker is working on Avalanche and Quorum.

_NOT:_ Altcoin burning important subject, it prevents spam too.

## Stable Coins

Bitcoin etc. are

- Non regulated
- Price volatile
- Used for trading / exchange and payment

Stable coins on the other hand:

- Regulated
- Non-volatile
- Can be used in real-life cases

There are different types of stable coins:

- Fiat-backed
- Commodity-backed
- Crypto-backed
- Non-collaterilazed

_NOT:_ CDBC (Central Bank Digital Currency) is an electronic currency that belongs to the banks. These are not cryptocurrencies!

## Summary

- Cryptocurrencies should not be thought of "easy way to make money"
- Will probably be used a lot more in the future
- Should not contract itself on being decentralized
- Should be more eco-friendly
- Should be easier to use by a wider audience
- Price fluctuations should be stabilised, and robust against manipulations

---

# Privacy in Blockchain

It all started with **Cypherpunk Manifesto**. Cypherpunks identify themselves as: _an activist promoting wide use of strong crypto and privacy-enhancing technologies as a route to social and political change._

This traces back to the study by David Chaum on anonymous digital cash. Later in 1992, Eric Hughes & Timothy May & John Gilmore were gathering to discuss some cryptographic and programming issues. This later turned into a mailing list.

Timothy May published "The Crypto Anarchist Manifesto" in 1992.

Eric Hughes then published "A Cypherpunk's Manifesto" in 1993, which is the _holy text_ of this movement.

There are important names within this manifesto:

- Adam Back (inventor of Hashcash)
- Nick Szabo (inventor of smart contracts)
- Wei Dai (inventor of B-Money)
- Hal Finney (receiver of the first Bitcoin transaction)
- Satoshi Nakamoto
- Julian Assange (founder of Wikileaks)

## Privacy Issues

Each user can get all the transactions shared in the network. This enables each used to validate integrity and authenticity, but it also exposes all transactions associated with an ID to everyone.

Bitcoin uses pseudonymous addresses for users to provide privacy upto a certain degree. You can even have multiple addresses for yourself. However, it is still possible to make connections between pseudonyms and real identities by gathering external information.

\[Reid & Harrigan\] studied the transactions within Bitcoin, and they created a transaction network and user network from these. It turns out that:

- User network has cyclic structure
- A transaction has single input from a larger transaction, ormultiple input from smaller transacitons
- A transaction has two outputs: one for payment, one directing to user's other address

_NOT:_ see the story about 25k BTC of user `allinvain`

## Privacy Enhancing Techniques

One can use a Mixer. Instead of the transaction $A \to B$, you to $A \to M \to B$, and the mixed $M$ pools these transactions and then forwards them later.

However, this requires trust to Mixer.

An alternative is Mixcoin \[Bonneau 2014\]. This prevents the mixer to steal a money, but the Mixer can still reveal your information (sender and receiver). This is all because Mixer is a centralized node.

\[Maxwell 2013\] introduced CoinJoin, which is a decentralized Mixer technique. It is utilized practically in many systems. Users group among themselves to create a large transaction that has smaller transactions hidden within. What if there are adversary users in the group?

CoinShuffle \[Ruffing et al. 2014\] solves this problem in a similar fashion to anonymity in Tor encryption.

### Ring Signatures

Recall how digital signatures work:

- A key pair $p_k, s_k$ is created (public, secret).
- We sign something with $\text{sign}(m, s_k) = s$ to obtain a signature.
- Someone can verify that $m$ is signed by doing $\text{vrfy}(m, p_k, s)$ and see if the result is 1.

\[Rivest 2001\] introduced ring signatures.

- You have $p_{k,x}, s_{k,x}$.
- There are other public keys $p_{k,1}, p_{k,2}, \ldots, p_{k,n}$ out there.
- A ring signature algorithm uses all of these keys to obtain a ring signature $r$.
- The verifier can tell that one member from the set $\{p_{k,1}, p_{k,2}, \ldots, p_{k,n}, p_{k,x}\}$ signed the message, but cannot tell which one it is.

Assume you design a voting scheme using ring signatures.

- One can vote for two different candidates without being detected
- Traceable ring signatures \[Fujisaka & Suzuki 2007\] enable us to detect this.

CryptoNote \[van Saberhagen 2013\] is another more recent ring signature method. It is used within Monero cryptocurrency too.

- Sender and receiver create a one-time address public key.
- Sender sends to the one-time address, instead of receiver's address.
- Receiver chooses $n$ addresses that have the specific amount of currency in them ($n$ output transactions), and makes a ring signature out of those (and his own secret key).

\[Kumar 2017\] analized Monero network to examine the untracabillity of CryptoNote. He found that 93% of all transaction output amounts appear only once and thus cannot be used in a ring (as they need the same amount). Furhtermore, users mostly use small number of transactions to avoid high fees. So, it does not seem to be usable in practice that much.

### Zero-knowledge Proofs

Zero-knowledge proofs were introduced by \[Goldwasser et al. 1985\]. Here, we have a prover and verifier, and somehow prover can convince the verifier that a statement is true without revealing any information other than this fact.

Example: suppose Ayla has two balls (green and red) and Bulent is color-blind (sees both as green). Ayla wants to prove that the balls are in different color, without telling which color are they.

- Bulent takes the balls, and switches them
- Ayla will tell whether they are switched or not. If indeed the balls were same color, she wouldn't be able to tell this.

In a zero-knowledge proof we expect 3 things:

- **Completeness**: if the statement is true, the honest verifier will be convinced by the honest prover
- **Soundness**: if the statement is false, no cheating prover can convince the honest verifier that it is true
- **Zero-knowledge**: the verifier learns nothing other than the statement is true

ZeroCoin \[Miers et al. 2013\] is a zero-knowledge based protocol on top of Bitcoin.

- User $A$ wants to send a coin to $B$. However, he doesn't want this transaction to be traced.
- User $A$ creates a random number sequence $r$. He then _commits_ to this sequence.
- There are many commitments with different $r$ but with the same amount of currency.
- $A$ provides a proof to show that one of these commitments have $r$ in them.
- $A$ in fact proves this to the verifier (whole network) that one of the commitments have $r$, but without telling which one it is.

## Privacy vs. Accountability

Okay cool we talk about privacy and stuff. However, what about accountability? Maybe we don't want that much privacy? If no one is accountable, this makes illegal activities much easier.

_NOT:_ [Liquid Democracy](https://en.wikipedia.org/wiki/Liquid_democracy)

---

# Smart Contracts & Ethereum

**Contract**: a written or spoken agreement that is intented to be enforceable by law.

**Smart Contract**: Code that facilitates, verifies, or enforces the negotiation or execution of a digital contract. Trusted entity must run this code.

Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible.

Smart contracts in Ethereum are written using **Solidity**.

```text
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
	uint public count;

	// get current count
	function get() public view returns (uint) {
		return count;
	}

	// increment by 1
	function inc() public {
		count+=1;
	}

	// decrement by 1
	function dec() public {
		count-=1;
	}
}
```

A smart contract is a computer program executed in a secure environment that directly controls _digital assets_:

- Domain name
- Website
- Money
- Anything tokenasible
- Game items
- Network bandwidth
- Computation cycles

Possible applications:

- Digital Identity
- Healthcare
- Cross-border Payments
- Financial Data Recording (loands, mortgages, etc.)
- Government
- Supply-chain Management
- Insurance
- $\ldots$

_NOT:_ Bitcoin also has its own scripting language, but it is quite hard.

_NOT:_ Solana can use Rust for writing smart contracts.

## Ethereum

Ethereum builds on Blockchain technology:

- Bitcoin validates, stores and replicates transactions
- Ethereum adds computer code to this distributed framework

It is a platform running on several computers in a distributed network. It replicates and processes data and small programs (i.e., smart contracts) without a central coordinator.

Ethereum uses proof-of-work similar to Bitcoin, but uses a different hash function called **Ethash** that has better ASIC resistance (and thus GPUs are used).

_NOT_: With ETH 2.0 they are moving to proof-of-stake.

Ethereum has its own token: **Ether** (ETH).

Compared to Bitcoin:

- Ethereum has a shorter block time (10 mins vs 15-17 seconds) which is more suitable for complext transactions (within smart contracts).
- Ethereum has smaller blocks:
  - The number of transactions (in a blcok) is not limited in terms of byte size; It is limited by **Gas**.
  - The maximum Gas in a single Ethereum block is 30,000,000 right now. Even a simple transaction uses 21,000 Gas.
  - Datawise, most Ethereum blocks are around 80KBs.
- Ethereum has a constant rate of token generation (unlike Bitcoin, which gets halved and is maximally capped at 21 million). This causes inflation!
- Ethereum does not follow the UTXO (unspent transaction output) model (Bitcoin does), though UTXO was a nice appraoch to prevent double spending. Instead, in Ethereum we have accounts and they have balances.
  - Bob owns private key to a set of UTXOs `5 BTC -> Bob`, `3 BTC -> Bob`, ...
  - Alice owns a wallet (account) with her private key, and has a balance `8 ETH`.

The vision of Ethereum is to be: a world computer; or, a distributed state machine.

### Ethereum Accounts

The address of an external account is determined from the public key, while the address of a contract account is determined at the time the contract is created (it is derived from the creator address and the number of transactions sent from that address)

In an account, we store:

- nonce: Number of transactions sent for extenral accounts; number of contracts created for contract accounts.
- balance: Number of Wei owned by this addres (1e18 Wei per 1 Ether).
- storageRoot: A hash of the root node of a Merkle Patricia Tree.
- codeHash: The hash of the EVM code of contract account. Hash("") for external acccounts.

When we want to use a contract, we send a transaction to that account. The nodes run the contract and agree on the output.

A transaction has:

- The recipient of the message
- A signature of the sender
- Amount of Ether to transfer
- An optional data/payload field.
- A `STARTGAS` value, representing max. number of computational steps the transaction execution is allowed to take.
- A `GASPRICE` value representing the fee the sender pays per computational step in the contract.

A transaction:

- is simply a message that is sent from one account to another account. It can include binary data (payload) and Ether.
- if the target account contains code, that code is executed and the payload becomes input data.
- if the target account is empty, the transaction creates a new contract. The payload is taken to be EVM bytecode and executed.

Vision of Ethereum is to be a distributed state machine:

- Ethereum (Contracts)
- Swarm (Net / File Store)
- Whisper (Dynamic Communications)

_NOT:_ There are other languages like Vyper (python-based), and LLL (Lisp-like Language) to program smart contracts.

_NOT:_ EVM is used because there are many different computers in the network, but all of them should be executing the same instructions for a contract.

_NOT:_ EVM has three areas where it can store data: storage (like harddrive), memory (like ram) and the stack (like CPU stack).

_NOT:_ When we say "world computer" the main motivation is not efficiency. The motivation is being a world computer without trusted third-parties.

### Token Contract Example

```text
contract Token {
  mapping(address => uint) public coinBalanceOf;
  event CoinTransfer(address sender, address receiver, uint amount);

  // supply the initial contract creator with this amount
  function token(uint supply) {
    if (supply == 0) supply = 10000;
    coinBalanceOf[msg.sender] = supply;
  }

  // simple trade function
  function sendCoin(address receiver, uint amount) returns(bool sufficient) {
    if (coinBalanceOf[msg.sender] < amount) return false;
    coinBalanceOf[msg.sender] -= amount;
    coinBalanceOf[receiver] += amount;
    CoinTransfer(msg.sender, receiver, amount);
    return true;
  }

  // NOTE: msg.sender is the one who called the function
}
```

### Gas

What happens if there is an infinite loop that makes the contract run forever? Well, that would be bad for miners. Ethereum solves this problem by adding a cost for each op-code execution (Gas). Gas is the mechanism by which we pay miners for their time and energy.

- All contracts require Gas, which fuels executions. More complex contracts require more gas.
- Fee = startgas x gasprime is subtracted from the sender )who pokes the contract) account.
- If contract succeeds, the remaining Gas is refunded.
- If contract runs out of Gas before it is finished, the execution is reverted and there is no refund!
- Purchasing gas ile like purchasin distributed, trustless computational power.
- Gas is for miners who run the contract, not for the people who wrote it.
- See more on how gas is calculated and which operations have how much gas. Note that storage is a lot more gas-expensive.

In contracts, it is a good idea to:

- Remove useless code
- Reduce expensive operations
- Use short-circuit evaluations
- Combine the loops
- Be efficient!

### Simple Storage Contract

```text
pragma soliditiy >=0.7.0 <0.9.0;

contract Storage {
  uint256 number;

  function store(uint256 num) public {
    number = num;
  }

  function retreive() public view returns (uint256) {
    return number;
  }
}
```

Everyone can set this number though! You can set contracts to have owners, so that only they can execute some parts of it. Or, you might want to add a pause button in the contract, as a safety precaution. These things are called [Solidity Design Patterns](https://dev.to/jamiescript/design-patterns-in-solidity-1i28#withdrawal), there are a lot of them!

_NOT:_ The only way to remove code form the blockchain is to `selfdestruct`. Note that this is potentially dangerous.

_NOT:_ To write contracts and practice it, use <https://remix.ethereum.org>!

## Security of Smart Contracts

People are building smart contracts, with many applications out there. However, where there is money, there are malicious actors.

Being careful is good. Hackers could think:

- Can I steal money from smart contract?
- Can I freeze the contract (to lock funds?)
- Can I make smart contracts send to wrong user?
- Can I change the code of smart contract?
- $\ldots$

<https://www.ulam.io/blog/smart-contract-audit> has some attacks.

You need to:

- Be prepared for failure
- Rollout and deploy carefully
- Stay updated about security patches
- Keep contracts simple
- Keep gas cost and block gas limits in mind
- Use tools to visualize and analyze contracts
- Be aware of the literature
- Be careful about the warning compilers generate
- Follow best practices!
- Be careful about external contract calls. You might not know what they do!

Any non-trivial contract will have errors. You code must

- Pause when things go wrong(circuit breaker)
- Manage amount of money at risk (rate limiting, maximumusage)
- Have an effective upgrade path for bug-fixes and improvements

_NOT:_ Re-entrancy attacks are important!

_nOt:_ State changes should be done before external calls!

_NOT:_ Integer overflows are problem!

_NOT:_ Randomness is important, be careful how you implement it. Block number and timestamp for example can be manipulated.

_NOT:_ Ethereum uses fixed-point arithmetic, as it uses Wei currency within instead of floating-point Ether.

---

# Web 3.0 & Metaverse

There is an undeniable hype; however, one must be careful:

- **[Argument from authority](https://en.wikipedia.org/wiki/Argument_from_authority) vs. Science**
  > The opinion of an authority on a topic is used as evidence to support an argument, which is fallacious. Science should be used as basis.
- **Pop Culture**
  > Once you have something that grows faster than education grows, you're always going to get a pop culture. [\[Alan Kay, 2004\]](https://queue.acm.org/detail.cfm?id=1039523)

What are Web 1.0, 2.0 and 3.0 though?

- **Web 1.0** (Read)
  - Static Pages
- **Web 2.0** (Read & Write)
  - Dynamic Content
  - Blogs
  - Social Networks
  - Cloud-computing
  - Mobile-first
- **Web 3.0** (Read & Write & Own)
  - Distributed Systems
  - Open Source
  - Privacy & Security
  - Decentralized Apps
  - Cryptocurrencies
  - NFTs
  - Semantic Web
  - AI-Driven
  - Edge computing
  - Massive AR/VR experiments

For Web 3.0, we need distributed protocols and technologies

**NOT**: I had to go do emergency stuff so I had to skip this class. Maybe I watch this later and write some more :)
