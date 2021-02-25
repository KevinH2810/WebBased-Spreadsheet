![Screenshot](assets/images/ZooBC-SDK.gif)

# ZooBC-SDK

![npm](https://img.shields.io/npm/v/zoobc)
![download](https://img.shields.io/npm/dw/zoobc)
![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![build](https://img.shields.io/circleci/build/github/zoobc/zoobc-sdk?token=8a1610a487c652b7165e501f7d4c814fe0e34e12)

ZooBC-SDK is a small set of libraries written with TypeScript and compiled to be JavaScript, making it easy to implement / integrate applications so that they connect with the P2P API of the nodes in the blockchain for the Web API of the explorer servers and wallet.

## Start using ZooBC-SDK

For instructions on how to use web and mobile for a project, please refer to these documents:

- [AngularJs](examples/angular)
- [Ionic](examples/ionic)
- [ReactJs](examples/react)
- [React Native](https://github.com/zoobc/zoobc-thumbwar.git)
- [VueJs](examples/vue)

## General Usage

Add 'zbc-sdk' packages to your project by executing:

```bash
$ npm install zbc-sdk
or
$ yarn add zbc-sdk
```

Here's an example of basic usage for connection:

```bash
import React, { useState, useEffect } from 'react';
import zoobc from 'zbc-sdk';

const App = () => {
  const [blocks, setBlocks] = useState([])
  const [error, setError] = useState(null)
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const hosts = [
      { host: 'http://your-ip-address:your-port', name: 'Testnet' },
    ];
    zoobc.Network.list(hosts)
    listBlocks();
  }, [])

  const listBlocks = () => {
    zoobc.Block
      .getBlocks({height: 0})
      .then(res => setBlocks(res.blocksList))
      .catch(err => setError(err))
  };

  const onClickBlockId = (id) => {
    zoobc.Block
      .getBlockById(id)
      .then(res => {
        setDetail(res)
        setError(null)
      })
      .catch(err => {
        setError(err)
        setDetail(null)
      })
  }

  const onClickBlockHeight = (height) => {
    zoobc.Block
      .getBlockByHeight(height)
      .then(res => {
        setDetail(res)
        setError(null)
      })
      .catch(err => {
        setError(err)
        setDetail(null)
      })
  }

  return (
    <>
      {!!error && (
        <>
          <div><strong>Error</strong></div>
          <code>{JSON.stringify(error)}</code>
        </>
      )}{!!detail && (
        <>
          <div><strong>Detail</strong></div>
          <code>{JSON.stringify(detail)}</code>
        </>
      )}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Previous Hash</th>
              <th>Height</th>
              <th>Timestamp</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {blocks.length > 0 &&
              blocks.map((data, key) => {
                return (
                  <tr key={key}>
                    <td onClick={() => onClickBlockId(data.block.id)}>
                      {data.block.id}
                    </td>
                    <td>{data.block.previousblockhash}</td>
                    <td onClick={() => onClickBlockHeight(data.block.height)}>
                      {data.block.height}
                    </td>
                    <td>{data.block.timestamp}</td>
                    <td>{data.block.version}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
  )
}

export default App;
```

## Contributors

Thanks to all who have [contributed](https://github.com/zoobc/zoobc-sdk/graphs/contributors) to ZooBC-SDK!

<table>
  <td align="center">
    <a href="https://github.com/gungdesurya">
      <img src="https://avatars0.githubusercontent.com/u/16068576?s=400&v=4" width="25px;" alt="" />
      <br /><sub><b>Gungde</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/eksant">
      <img src="https://avatars1.githubusercontent.com/u/32409305?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Eko</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/iamnafri">
      <img src="https://avatars2.githubusercontent.com/u/17779930?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Irfan</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/gedeyandi456">
      <img src="https://avatars2.githubusercontent.com/u/43771081?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Yandi</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/gedenata">
      <img src="https://avatars2.githubusercontent.com/u/1158185?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Nata</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/bagasAgastya">
      <img src="https://avatars0.githubusercontent.com/u/43229728?s=400&u=37969638269840f8b3a492776ca85c11a025cdb0&v=4" width="25px;" alt="" />
      <br /><sub><b>Bagas</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/KevinH2810">
      <img src="https://avatars2.githubusercontent.com/u/47102992?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Kevin</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/zaenury">
      <img src="https://avatars1.githubusercontent.com/u/42806183?s=460&v=4" width="25px;" alt="" />
      <br /><sub><b>Adhiim</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/witarsana">
      <img src="https://avatars3.githubusercontent.com/u/16716094?s=400&u=1884ab616ca41aee1b4218107fe8d4cf409043f0&v=4" width="25px;" alt="" />
      <br /><sub><b>Witarsana</b></sub>
    </a>
  </td>
</table>

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details
