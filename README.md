# Lit Docs - Code Review

## `checkAndSignAuthMessage()`

- `nonce` must be passed.

## `signAndSaveAuthMessage()`

- `nonce`, `uri`, and `resources` must be passed.

## `getSessionSigs()`

- `chainId` is an integer, not a string.
- `hashedEncryptedSymmetricKeyString` is not defined.

## `getSignedToken()`

- `unifiedAccessControlConditions` is not needed anymore.