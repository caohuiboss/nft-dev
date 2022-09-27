async function main() {
    const PandaPunk2169 = await ethers.getContractFactory("PandaPunk2169")

    // Start deployment, returning a promise that resolves to a contract object
    const pandaPunk2169 = await PandaPunk2169.deploy()
    await pandaPunk2169.deployed()
    console.log("Contract deployed to address:", pandaPunk2169.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
