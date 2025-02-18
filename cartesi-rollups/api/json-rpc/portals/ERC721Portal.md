The **ERC721Portal** allows anyone to perform transfers of
ERC-721 tokens to a DApp while informing the off-chain machine.


### depositERC721Token

```solidity
function depositERC721Token(contract IERC721 _token, address _dapp, uint256 _tokenId, bytes _baseLayerData, bytes _execLayerData) external
```

Transfer an ERC-721 token to a DApp and add an input to
the DApp's input box to signal such operation.

The caller must change the approved address for the ERC-721 token
to the portal address beforehand, by calling the `approve` function in the
token contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _token | contract IERC721 | The ERC-721 token contract |
| _dapp | address | The address of the DApp |
| _tokenId | uint256 | The identifier of the token being transferred |
| _baseLayerData | bytes | Additional data to be interpreted by the base layer |
| _execLayerData | bytes | Additional data to be interpreted by the execution layer |
