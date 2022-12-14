import { getNFTInfo } from './tokenUtil'

/**
 * Sets the background of the element ref to that of the user's pfp
 * @param  {...any} others An array of arrays - [][ref, asset, address, blur]...
 */
export const setPfps = async (...others) => {
	if (others) {
		const oLen = others.length
		let i = 0
		for (i; i < oLen; i++) {
			const opts = others[i]
			const ref = opts[0]
			const nftInfo = await getNFTInfo(opts[1], opts[2])
			// console.log({ nftInfo })
			const pfp =
				(nftInfo?.media?.raw
					? nftInfo?.media?.raw.indexOf('ipfs://') === 0
						? 'https://gateway.ipfs.io/ipfs/' + nftInfo?.media?.raw.slice(7)
						: nftInfo?.media?.raw
					: '') ??
				nftInfo?.media?.gateway ??
				nftInfo?.media?.image
			// console.log({ pfp })
			const blur = opts[3]
			ref.current.style.background = `${
				blur
					? 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)) ,'
					: ''
			}url(${pfp})`
			ref.current.style.backgroundPosition = 'center'
			ref.current.style.backgroundRepeat = 'no-repeat'
			ref.current.style.backgroundSize = 'contain'
		}
	}
}
