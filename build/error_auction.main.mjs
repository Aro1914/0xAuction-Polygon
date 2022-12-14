// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  return {
    created: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4],
    log: [ctc5, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc6 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    link: ctc4,
    owner: ctc0,
    price: ctc2,
    title: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc6, ctc2, ctc9],
      5: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc9, ctc2, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Auctioneer_acceptSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Auctioneer_acceptSale0_339: ctc6,
    Auctioneer_rejectSale0_339: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v645, v646, v664, v673, v676, v850, v851, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc5, ctc2, ctc2]);
  const v866 = ctc.selfAddress();
  const v868 = stdlib.protect(ctc6, await interact.in(), {
    at: './error_auction.rsh:1:23:application',
    fs: ['at ./error_auction.rsh:118:28:application call to [unknown function] (defined at: ./error_auction.rsh:118:28:function exp)', 'at ./error_auction.rsh:113:48:application call to "runAuctioneer_acceptSale0_339" (defined at: ./error_auction.rsh:116:21:function exp)', 'at ./error_auction.rsh:113:48:application call to [unknown function] (defined at: ./error_auction.rsh:113:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v870 = stdlib.addressEq(v866, v645);
  stdlib.assert(v870, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./error_auction.rsh:119:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:118:28:application call to [unknown function] (defined at: ./error_auction.rsh:118:28:function exp)', 'at ./error_auction.rsh:118:28:application call to [unknown function] (defined at: ./error_auction.rsh:118:28:function exp)', 'at ./error_auction.rsh:113:48:application call to "runAuctioneer_acceptSale0_339" (defined at: ./error_auction.rsh:116:21:function exp)', 'at ./error_auction.rsh:113:48:application call to [unknown function] (defined at: ./error_auction.rsh:113:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v874 = ['Auctioneer_acceptSale0_339', v868];
  
  const txn1 = await (ctc.sendrecv({
    args: [v645, v646, v664, v673, v676, v850, v851, v864, v874],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./error_auction.rsh:121:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v889], secs: v891, time: v890, didSend: v464, from: v888 } = txn1;
      
      switch (v889[0]) {
        case 'Auctioneer_acceptSale0_339': {
          const v892 = v889[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v900 = 'accepted            ';
          null;
          const v901 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
          const v902 = v901[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
          const v908 = stdlib.sub(v902, v902);
          const v910 = stdlib.Array_set(v901, '0', v908);
          const v911 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:125:71:application', stdlib.UInt_max, '0'), v910);
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: v646
            });
          const v916 = stdlib.sub(v851, v851);
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: undefined /* Nothing */
            });
          const v917 = true;
          const v918 = await txn1.getOutput('Auctioneer_acceptSale', 'v917', ctc3, v917);
          
          const v1687 = v911[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          const v1688 = v1687[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: v646
            });
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v646
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Auctioneer_rejectSale0_339': {
          const v948 = v889[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc5, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v889], secs: v891, time: v890, didSend: v464, from: v888 } = txn1;
  switch (v889[0]) {
    case 'Auctioneer_acceptSale0_339': {
      const v892 = v889[1];
      undefined /* setApiDetails */;
      ;
      const v900 = 'accepted            ';
      null;
      const v901 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
      const v902 = v901[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
      const v908 = stdlib.sub(v902, v902);
      const v910 = stdlib.Array_set(v901, '0', v908);
      const v911 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:125:71:application', stdlib.UInt_max, '0'), v910);
      ;
      const v916 = stdlib.sub(v851, v851);
      ;
      const v917 = true;
      const v918 = await txn1.getOutput('Auctioneer_acceptSale', 'v917', ctc3, v917);
      if (v464) {
        stdlib.protect(ctc8, await interact.out(v892, v918), {
          at: './error_auction.rsh:117:25:application',
          fs: ['at ./error_auction.rsh:117:25:application call to [unknown function] (defined at: ./error_auction.rsh:117:25:function exp)', 'at ./error_auction.rsh:127:39:application call to "notify" (defined at: ./error_auction.rsh:122:34:function exp)', 'at ./error_auction.rsh:122:34:application call to [unknown function] (defined at: ./error_auction.rsh:122:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v1687 = v911[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
      const v1688 = v1687[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    case 'Auctioneer_rejectSale0_339': {
      const v948 = v889[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Auctioneer_acceptSale0_339: ctc6,
    Auctioneer_rejectSale0_339: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v645, v646, v664, v673, v676, v850, v851, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc5, ctc2, ctc2]);
  const v876 = ctc.selfAddress();
  const v878 = stdlib.protect(ctc6, await interact.in(), {
    at: './error_auction.rsh:1:23:application',
    fs: ['at ./error_auction.rsh:133:28:application call to [unknown function] (defined at: ./error_auction.rsh:133:28:function exp)', 'at ./error_auction.rsh:113:48:application call to "runAuctioneer_rejectSale0_339" (defined at: ./error_auction.rsh:131:21:function exp)', 'at ./error_auction.rsh:113:48:application call to [unknown function] (defined at: ./error_auction.rsh:113:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v880 = stdlib.addressEq(v876, v645);
  stdlib.assert(v880, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./error_auction.rsh:134:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:133:28:application call to [unknown function] (defined at: ./error_auction.rsh:133:28:function exp)', 'at ./error_auction.rsh:133:28:application call to [unknown function] (defined at: ./error_auction.rsh:133:28:function exp)', 'at ./error_auction.rsh:113:48:application call to "runAuctioneer_rejectSale0_339" (defined at: ./error_auction.rsh:131:21:function exp)', 'at ./error_auction.rsh:113:48:application call to [unknown function] (defined at: ./error_auction.rsh:113:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v884 = ['Auctioneer_rejectSale0_339', v878];
  
  const txn1 = await (ctc.sendrecv({
    args: [v645, v646, v664, v673, v676, v850, v851, v864, v884],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./error_auction.rsh:136:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v889], secs: v891, time: v890, didSend: v464, from: v888 } = txn1;
      
      switch (v889[0]) {
        case 'Auctioneer_acceptSale0_339': {
          const v892 = v889[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_339': {
          const v948 = v889[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v981 = 'rejected            ';
          null;
          const v982 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
          const v983 = v982[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
          const v989 = stdlib.sub(v983, v983);
          const v991 = stdlib.Array_set(v982, '0', v989);
          const v992 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:140:71:application', stdlib.UInt_max, '0'), v991);
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: v646
            });
          const v997 = stdlib.sub(v851, v851);
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: undefined /* Nothing */
            });
          const v998 = false;
          const v999 = await txn1.getOutput('Auctioneer_rejectSale', 'v998', ctc3, v998);
          
          const v1708 = v992[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          const v1709 = v1708[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: v646
            });
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v646
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc5, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v889], secs: v891, time: v890, didSend: v464, from: v888 } = txn1;
  switch (v889[0]) {
    case 'Auctioneer_acceptSale0_339': {
      const v892 = v889[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_339': {
      const v948 = v889[1];
      undefined /* setApiDetails */;
      ;
      const v981 = 'rejected            ';
      null;
      const v982 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
      const v983 = v982[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
      const v989 = stdlib.sub(v983, v983);
      const v991 = stdlib.Array_set(v982, '0', v989);
      const v992 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:140:71:application', stdlib.UInt_max, '0'), v991);
      ;
      const v997 = stdlib.sub(v851, v851);
      ;
      const v998 = false;
      const v999 = await txn1.getOutput('Auctioneer_rejectSale', 'v998', ctc3, v998);
      if (v464) {
        stdlib.protect(ctc8, await interact.out(v948, v999), {
          at: './error_auction.rsh:132:25:application',
          fs: ['at ./error_auction.rsh:132:25:application call to [unknown function] (defined at: ./error_auction.rsh:132:25:function exp)', 'at ./error_auction.rsh:142:39:application call to "notify" (defined at: ./error_auction.rsh:137:34:function exp)', 'at ./error_auction.rsh:137:34:application call to [unknown function] (defined at: ./error_auction.rsh:137:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v1708 = v992[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
      const v1709 = v1708[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_stopAuction0_82: ctc6,
    Bidder_bid0_82: ctc7
    });
  const ctc9 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v645, v646, v664, v672, v673, v674, v675, v676, v677, v683, v684] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc3, ctc2, ctc2, ctc5, ctc2]);
  const v699 = ctc.selfAddress();
  const v701 = stdlib.protect(ctc6, await interact.in(), {
    at: './error_auction.rsh:1:23:application',
    fs: ['at ./error_auction.rsh:90:28:application call to [unknown function] (defined at: ./error_auction.rsh:90:28:function exp)', 'at ./error_auction.rsh:66:83:application call to "runAuctioneer_stopAuction0_82" (defined at: ./error_auction.rsh:88:21:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v703 = stdlib.addressEq(v699, v645);
  stdlib.assert(v703, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./error_auction.rsh:91:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:90:28:application call to [unknown function] (defined at: ./error_auction.rsh:90:28:function exp)', 'at ./error_auction.rsh:90:28:application call to [unknown function] (defined at: ./error_auction.rsh:90:28:function exp)', 'at ./error_auction.rsh:66:83:application call to "runAuctioneer_stopAuction0_82" (defined at: ./error_auction.rsh:88:21:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v707 = ['Auctioneer_stopAuction0_82', v701];
  
  const txn1 = await (ctc.sendrecv({
    args: [v645, v646, v664, v672, v673, v674, v675, v676, v677, v683, v684, v707],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./error_auction.rsh:93:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v729], secs: v731, time: v730, didSend: v250, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'Auctioneer_stopAuction0_82': {
          const v732 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v745 = 'endSuccess          ';
          null;
          const v748 = {
            blockEnded: v730,
            id: v664,
            lastBid: v676
            };
          const v749 = await txn1.getOutput('Auctioneer_stopAuction', 'v748', ctc9, v748);
          
          const v1710 = v673;
          const v1711 = v674;
          const v1712 = false;
          const v1713 = v676;
          const v1714 = v730;
          const v1716 = v683;
          const v1717 = v684;
          const v1718 = stdlib.gt(v672, v677);
          const v1719 = v1718 ? false : false;
          if (v1719) {
            sim_r.isHalt = false;
            }
          else {
            const v1720 = 'down                ';
            const v1721 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
            null;
            const v1768 = v683;
            const v1769 = v684;
            const v1770 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bidder_bid0_82': {
          const v783 = v729[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc3, ctc2, ctc2, ctc5, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v250, from: v728 } = txn1;
  switch (v729[0]) {
    case 'Auctioneer_stopAuction0_82': {
      const v732 = v729[1];
      undefined /* setApiDetails */;
      ;
      const v745 = 'endSuccess          ';
      null;
      const v748 = {
        blockEnded: v730,
        id: v664,
        lastBid: v676
        };
      const v749 = await txn1.getOutput('Auctioneer_stopAuction', 'v748', ctc9, v748);
      if (v250) {
        stdlib.protect(ctc10, await interact.out(v732, v749), {
          at: './error_auction.rsh:89:25:application',
          fs: ['at ./error_auction.rsh:89:25:application call to [unknown function] (defined at: ./error_auction.rsh:89:25:function exp)', 'at ./error_auction.rsh:102:39:application call to "notify" (defined at: ./error_auction.rsh:94:34:function exp)', 'at ./error_auction.rsh:94:34:application call to [unknown function] (defined at: ./error_auction.rsh:94:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v1710 = v673;
      const v1711 = v674;
      const v1712 = false;
      const v1713 = v676;
      const v1714 = v730;
      const v1716 = v683;
      const v1717 = v684;
      const v1718 = stdlib.gt(v672, v677);
      const v1719 = v1718 ? false : false;
      if (v1719) {
        return;
        }
      else {
        const v1720 = 'down                ';
        const v1721 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
        null;
        const v1768 = v683;
        const v1769 = v684;
        const v1770 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
        return;
        }
      break;
      }
    case 'Bidder_bid0_82': {
      const v783 = v729[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_stopAuction0_82: ctc7,
    Bidder_bid0_82: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v645, v646, v664, v672, v673, v674, v675, v676, v677, v683, v684] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc3, ctc2, ctc2, ctc5, ctc2]);
  const v711 = stdlib.protect(ctc6, await interact.in(), {
    at: './error_auction.rsh:1:23:application',
    fs: ['at ./error_auction.rsh:75:41:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to "runBidder_bid0_82" (defined at: ./error_auction.rsh:75:22:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v712 = v711[stdlib.checkedBigNumberify('./error_auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v714 = stdlib.gt(v712, v676);
  stdlib.assert(v714, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./error_auction.rsh:76:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:75:41:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to "runBidder_bid0_82" (defined at: ./error_auction.rsh:75:22:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v721 = ['Bidder_bid0_82', v711];
  
  const txn1 = await (ctc.sendrecv({
    args: [v645, v646, v664, v672, v673, v674, v675, v676, v677, v683, v684, v721],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v712, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v729], secs: v731, time: v730, didSend: v250, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'Auctioneer_stopAuction0_82': {
          const v732 = v729[1];
          
          break;
          }
        case 'Bidder_bid0_82': {
          const v783 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v789 = v783[stdlib.checkedBigNumberify('./error_auction.rsh:75:22:spread', stdlib.UInt_max, '0')];
          const v793 = stdlib.add(v684, v789);
          sim_r.txns.push({
            amt: v789,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v814 = [v673, v676];
          const v815 = await txn1.getOutput('Bidder_bid', 'v814', ctc9, v814);
          
          if (v674) {
            const v832 = 'bidSuccess          ';
            null;
            const v1962 = v728;
            const v1963 = false;
            const v1964 = v675;
            const v1965 = v789;
            const v1966 = v730;
            const v1968 = v683;
            const v1969 = v793;
            const v1970 = stdlib.gt(v672, v677);
            const v1971 = v1970 ? v675 : false;
            if (v1971) {
              sim_r.isHalt = false;
              }
            else {
              const v1972 = 'down                ';
              const v1973 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
              null;
              const v2020 = v683;
              const v2021 = v793;
              const v2022 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
              sim_r.isHalt = false;
              }}
          else {
            const v827 = stdlib.sub(v793, v676);
            sim_r.txns.push({
              kind: 'from',
              to: v673,
              tok: undefined /* Nothing */
              });
            const v829 = 'bidSuccess          ';
            null;
            const v2025 = v728;
            const v2026 = false;
            const v2027 = v675;
            const v2028 = v789;
            const v2029 = v730;
            const v2031 = v683;
            const v2032 = v827;
            const v2033 = stdlib.gt(v672, v677);
            const v2034 = v2033 ? v675 : false;
            if (v2034) {
              sim_r.isHalt = false;
              }
            else {
              const v2035 = 'down                ';
              const v2036 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
              null;
              const v2083 = v683;
              const v2084 = v827;
              const v2085 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc3, ctc2, ctc2, ctc5, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v250, from: v728 } = txn1;
  switch (v729[0]) {
    case 'Auctioneer_stopAuction0_82': {
      const v732 = v729[1];
      return;
      break;
      }
    case 'Bidder_bid0_82': {
      const v783 = v729[1];
      undefined /* setApiDetails */;
      const v789 = v783[stdlib.checkedBigNumberify('./error_auction.rsh:75:22:spread', stdlib.UInt_max, '0')];
      const v790 = stdlib.gt(v789, v676);
      stdlib.assert(v790, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./error_auction.rsh:76:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:75:41:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v793 = stdlib.add(v684, v789);
      ;
      const v814 = [v673, v676];
      const v815 = await txn1.getOutput('Bidder_bid', 'v814', ctc9, v814);
      if (v250) {
        stdlib.protect(ctc10, await interact.out(v783, v815), {
          at: './error_auction.rsh:75:23:application',
          fs: ['at ./error_auction.rsh:75:23:application call to [unknown function] (defined at: ./error_auction.rsh:75:23:function exp)', 'at ./error_auction.rsh:80:47:application call to "notify" (defined at: ./error_auction.rsh:79:42:function exp)', 'at ./error_auction.rsh:79:42:application call to [unknown function] (defined at: ./error_auction.rsh:79:42:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v674) {
        const v832 = 'bidSuccess          ';
        null;
        const v1962 = v728;
        const v1963 = false;
        const v1964 = v675;
        const v1965 = v789;
        const v1966 = v730;
        const v1968 = v683;
        const v1969 = v793;
        const v1970 = stdlib.gt(v672, v677);
        const v1971 = v1970 ? v675 : false;
        if (v1971) {
          return;
          }
        else {
          const v1972 = 'down                ';
          const v1973 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
          null;
          const v2020 = v683;
          const v2021 = v793;
          const v2022 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
          return;
          }}
      else {
        const v827 = stdlib.sub(v793, v676);
        ;
        const v829 = 'bidSuccess          ';
        null;
        const v2025 = v728;
        const v2026 = false;
        const v2027 = v675;
        const v2028 = v789;
        const v2029 = v730;
        const v2031 = v683;
        const v2032 = v827;
        const v2033 = stdlib.gt(v672, v677);
        const v2034 = v2033 ? v675 : false;
        if (v2034) {
          return;
          }
        else {
          const v2035 = 'down                ';
          const v2036 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
          null;
          const v2083 = v683;
          const v2084 = v827;
          const v2085 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    deadline: ctc0,
    description: ctc1,
    id: ctc0,
    link: ctc2,
    owner: ctc3,
    price: ctc0,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc0,
    description: ctc1,
    id: ctc0,
    link: ctc2,
    owner: ctc3,
    price: ctc0,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  const ctc10 = stdlib.T_Data({
    Auctioneer_stopAuction0_82: ctc8,
    Bidder_bid0_82: ctc9
    });
  const ctc11 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc0]);
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0, ctc13]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc16 = stdlib.T_Data({
    Auctioneer_acceptSale0_339: ctc8,
    Auctioneer_rejectSale0_339: ctc8
    });
  
  
  const v620 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v621 = [v620];
  const v625 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v626 = v625.deadline;
  const v627 = v625.description;
  const v628 = v625.id;
  const v629 = v625.link;
  const v630 = v625.owner;
  const v631 = v625.price;
  const v632 = v625.title;
  const v633 = v625.tokenId;
  
  const v644 = {
    deadline: v626,
    description: v627,
    id: v628,
    link: v629,
    owner: v630,
    price: v631,
    title: v632
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v633, v644],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7],
    pay: [stdlib.checkedBigNumberify('./error_auction.rsh:51:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v646, v647], secs: v649, time: v648, didSend: v45, from: v645 } = txn1;
      
      const v650 = v621[stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0')];
      const v651 = stdlib.Array_set(v650, '0', stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0'));
      const v652 = stdlib.Array_set(v621, stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0'), v651);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v646
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v646, v647], secs: v649, time: v648, didSend: v45, from: v645 } = txn1;
  const v650 = v621[stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0')];
  const v651 = stdlib.Array_set(v650, '0', stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0'));
  const v652 = stdlib.Array_set(v621, stdlib.checkedBigNumberify('./error_auction.rsh:51:16:dot', stdlib.UInt_max, '0'), v651);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v645, v646, v647, v648, v652],
    evt_cnt: 0,
    funcNum: 1,
    lct: v648,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./error_auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v646]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v656, time: v655, didSend: v52, from: v654 } = txn2;
      
      ;
      const v657 = v652[stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0')];
      const v658 = v657[stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0')];
      const v659 = stdlib.add(v658, stdlib.checkedBigNumberify('./error_auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v661 = stdlib.Array_set(v657, '0', v659);
      const v662 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0'), v661);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./error_auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v646
        });
      const v664 = v647.id;
      const v665 = await ctc.getContractInfo();
      const v666 = v655;
      const v667 = v647.link;
      const v668 = v647.title;
      const v669 = v647.description;
      null;
      const v670 = v647.deadline;
      const v672 = stdlib.safeAdd(v648, v670);
      const v673 = v645;
      const v674 = true;
      const v675 = true;
      const v676 = stdlib.checkedBigNumberify('./error_auction.rsh:69:17:decimal', stdlib.UInt_max, '0');
      const v677 = v655;
      const v678 = v648;
      const v683 = v662;
      const v684 = stdlib.checkedBigNumberify('./error_auction.rsh:46:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v692 = stdlib.gt(v672, v678);
        const v693 = v692 ? v675 : false;
        
        return v693;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v841 = 'down                ';
        const v842 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
        null;
        const v843 = true;
        const v844 = v677;
        const v850 = v683;
        const v851 = v684;
        
        if (await (async () => {
          
          return v843;})()) {
          const v864 = stdlib.safeAdd(v844, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
          sim_r.isHalt = false;
          }
        else {
          const v1027 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          const v1028 = v1027[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: v646
            });
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v646
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v656, time: v655, didSend: v52, from: v654 } = txn2;
  ;
  const v657 = v652[stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0')];
  const v658 = v657[stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0')];
  const v659 = stdlib.add(v658, stdlib.checkedBigNumberify('./error_auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v661 = stdlib.Array_set(v657, '0', v659);
  const v662 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./error_auction.rsh:53:16:dot', stdlib.UInt_max, '0'), v661);
  ;
  const v663 = stdlib.addressEq(v645, v654);
  stdlib.assert(v663, {
    at: './error_auction.rsh:53:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v664 = v647.id;
  const v665 = await ctc.getContractInfo();
  const v666 = v655;
  const v667 = v647.link;
  const v668 = v647.title;
  const v669 = v647.description;
  null;
  const v670 = v647.deadline;
  const v672 = stdlib.safeAdd(v648, v670);
  let v673 = v645;
  let v674 = true;
  let v675 = true;
  let v676 = stdlib.checkedBigNumberify('./error_auction.rsh:69:17:decimal', stdlib.UInt_max, '0');
  let v677 = v655;
  let v678 = v648;
  let v683 = v662;
  let v684 = stdlib.checkedBigNumberify('./error_auction.rsh:46:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v692 = stdlib.gt(v672, v678);
    const v693 = v692 ? v675 : false;
    
    return v693;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc10],
      timeoutAt: ['time', v672],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v645, v646, v664, v672, v673, v674, v675, v676, v677, v683, v684],
        evt_cnt: 0,
        funcNum: 7,
        lct: v677,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./error_auction.rsh:107:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v836, time: v835, didSend: v324, from: v834 } = txn5;
          
          ;
          const cv673 = v673;
          const cv674 = v674;
          const cv675 = v675;
          const cv676 = v676;
          const cv677 = v835;
          const cv678 = v677;
          const cv683 = v683;
          const cv684 = v684;
          
          await (async () => {
            const v673 = cv673;
            const v674 = cv674;
            const v675 = cv675;
            const v676 = cv676;
            const v677 = cv677;
            const v678 = cv678;
            const v683 = cv683;
            const v684 = cv684;
            
            if (await (async () => {
              const v692 = stdlib.gt(v672, v678);
              const v693 = v692 ? v675 : false;
              
              return v693;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v841 = 'down                ';
              const v842 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
              null;
              const v843 = true;
              const v844 = v677;
              const v850 = v683;
              const v851 = v684;
              
              if (await (async () => {
                
                return v843;})()) {
                const v864 = stdlib.safeAdd(v844, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
                sim_r.isHalt = false;
                }
              else {
                const v1027 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
                const v1028 = v1027[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v673,
                  tok: v646
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v645,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v646
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc5, ctc0, ctc0, ctc3, ctc13, ctc13, ctc0, ctc0, ctc15, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v836, time: v835, didSend: v324, from: v834 } = txn5;
      ;
      const v837 = stdlib.addressEq(v645, v834);
      stdlib.assert(v837, {
        at: './error_auction.rsh:107:32:dot',
        fs: ['at ./error_auction.rsh:106:46:application call to [unknown function] (defined at: ./error_auction.rsh:106:46:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv673 = v673;
      const cv674 = v674;
      const cv675 = v675;
      const cv676 = v676;
      const cv677 = v835;
      const cv678 = v677;
      const cv683 = v683;
      const cv684 = v684;
      
      v673 = cv673;
      v674 = cv674;
      v675 = cv675;
      v676 = cv676;
      v677 = cv677;
      v678 = cv678;
      v683 = cv683;
      v684 = cv684;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v729], secs: v731, time: v730, didSend: v250, from: v728 } = txn4;
      switch (v729[0]) {
        case 'Auctioneer_stopAuction0_82': {
          const v732 = v729[1];
          undefined /* setApiDetails */;
          ;
          const v745 = 'endSuccess          ';
          null;
          const v748 = {
            blockEnded: v730,
            id: v664,
            lastBid: v676
            };
          await txn4.getOutput('Auctioneer_stopAuction', 'v748', ctc11, v748);
          const cv673 = v673;
          const cv674 = v674;
          const cv675 = false;
          const cv676 = v676;
          const cv677 = v730;
          const cv678 = v677;
          const cv683 = v683;
          const cv684 = v684;
          
          v673 = cv673;
          v674 = cv674;
          v675 = cv675;
          v676 = cv676;
          v677 = cv677;
          v678 = cv678;
          v683 = cv683;
          v684 = cv684;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Bidder_bid0_82': {
          const v783 = v729[1];
          undefined /* setApiDetails */;
          const v789 = v783[stdlib.checkedBigNumberify('./error_auction.rsh:75:22:spread', stdlib.UInt_max, '0')];
          const v790 = stdlib.gt(v789, v676);
          stdlib.assert(v790, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./error_auction.rsh:76:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./error_auction.rsh:75:41:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:75:41:function exp)', 'at ./error_auction.rsh:66:83:application call to [unknown function] (defined at: ./error_auction.rsh:66:83:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Seller'
            });
          const v793 = stdlib.add(v684, v789);
          ;
          const v814 = [v673, v676];
          await txn4.getOutput('Bidder_bid', 'v814', ctc12, v814);
          if (v674) {
            const v832 = 'bidSuccess          ';
            null;
            const cv673 = v728;
            const cv674 = false;
            const cv675 = v675;
            const cv676 = v789;
            const cv677 = v730;
            const cv678 = v677;
            const cv683 = v683;
            const cv684 = v793;
            
            v673 = cv673;
            v674 = cv674;
            v675 = cv675;
            v676 = cv676;
            v677 = cv677;
            v678 = cv678;
            v683 = cv683;
            v684 = cv684;
            
            txn3 = txn4;
            continue;}
          else {
            const v827 = stdlib.sub(v793, v676);
            ;
            const v829 = 'bidSuccess          ';
            null;
            const cv673 = v728;
            const cv674 = false;
            const cv675 = v675;
            const cv676 = v789;
            const cv677 = v730;
            const cv678 = v677;
            const cv683 = v683;
            const cv684 = v827;
            
            v673 = cv673;
            v674 = cv674;
            v675 = cv675;
            v676 = cv676;
            v677 = cv677;
            v678 = cv678;
            v683 = cv683;
            v684 = cv684;
            
            txn3 = txn4;
            continue;}
          break;
          }
        }}
    
    }
  const v841 = 'down                ';
  const v842 = stdlib.checkedBigNumberify('./error_auction.rsh:111:56:decimal', stdlib.UInt_max, '1');
  null;
  let v843 = true;
  let v844 = v677;
  let v850 = v683;
  let v851 = v684;
  
  let txn4 = txn3;
  while (await (async () => {
    
    return v843;})()) {
    const v864 = stdlib.safeAdd(v844, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc16],
      timeoutAt: ['time', v864],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v645, v646, v664, v673, v676, v850, v851, v864],
        evt_cnt: 0,
        funcNum: 5,
        lct: v844,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./error_auction.rsh:147:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1006, time: v1005, didSend: v524, from: v1004 } = txn6;
          
          ;
          const v1009 = 'accepted            ';
          null;
          const v1010 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:150:41:application', stdlib.UInt_max, '0')];
          const v1011 = v1010[stdlib.checkedBigNumberify('./error_auction.rsh:150:41:application', stdlib.UInt_max, '0')];
          const v1017 = stdlib.sub(v1011, v1011);
          const v1019 = stdlib.Array_set(v1010, '0', v1017);
          const v1020 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:150:63:application', stdlib.UInt_max, '0'), v1019);
          sim_r.txns.push({
            kind: 'from',
            to: v673,
            tok: v646
            });
          const v1025 = stdlib.sub(v851, v851);
          sim_r.txns.push({
            kind: 'from',
            to: v645,
            tok: undefined /* Nothing */
            });
          const cv843 = true;
          const cv844 = v1005;
          const cv850 = v1020;
          const cv851 = v1025;
          
          await (async () => {
            const v843 = cv843;
            const v844 = cv844;
            const v850 = cv850;
            const v851 = cv851;
            
            if (await (async () => {
              
              return v843;})()) {
              const v864 = stdlib.safeAdd(v844, stdlib.checkedBigNumberify('./error_auction.rsh:10:18:decimal', stdlib.UInt_max, '20'));
              sim_r.isHalt = false;
              }
            else {
              const v1027 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
              const v1028 = v1027[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v673,
                tok: v646
                });
              sim_r.txns.push({
                kind: 'from',
                to: v645,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v646
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc5, ctc0, ctc3, ctc0, ctc15, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1006, time: v1005, didSend: v524, from: v1004 } = txn6;
      ;
      const v1007 = stdlib.addressEq(v645, v1004);
      stdlib.assert(v1007, {
        at: './error_auction.rsh:147:32:dot',
        fs: ['at ./error_auction.rsh:146:53:application call to [unknown function] (defined at: ./error_auction.rsh:146:53:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v1009 = 'accepted            ';
      null;
      const v1010 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:150:41:application', stdlib.UInt_max, '0')];
      const v1011 = v1010[stdlib.checkedBigNumberify('./error_auction.rsh:150:41:application', stdlib.UInt_max, '0')];
      const v1017 = stdlib.sub(v1011, v1011);
      const v1019 = stdlib.Array_set(v1010, '0', v1017);
      const v1020 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:150:63:application', stdlib.UInt_max, '0'), v1019);
      ;
      const v1025 = stdlib.sub(v851, v851);
      ;
      const cv843 = true;
      const cv844 = v1005;
      const cv850 = v1020;
      const cv851 = v1025;
      
      v843 = cv843;
      v844 = cv844;
      v850 = cv850;
      v851 = cv851;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v889], secs: v891, time: v890, didSend: v464, from: v888 } = txn5;
      switch (v889[0]) {
        case 'Auctioneer_acceptSale0_339': {
          const v892 = v889[1];
          undefined /* setApiDetails */;
          ;
          const v900 = 'accepted            ';
          null;
          const v901 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
          const v902 = v901[stdlib.checkedBigNumberify('./error_auction.rsh:125:49:application', stdlib.UInt_max, '0')];
          const v908 = stdlib.sub(v902, v902);
          const v910 = stdlib.Array_set(v901, '0', v908);
          const v911 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:125:71:application', stdlib.UInt_max, '0'), v910);
          ;
          const v916 = stdlib.sub(v851, v851);
          ;
          const v917 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v917', ctc13, v917);
          const cv843 = false;
          const cv844 = v890;
          const cv850 = v911;
          const cv851 = v916;
          
          v843 = cv843;
          v844 = cv844;
          v850 = cv850;
          v851 = cv851;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_339': {
          const v948 = v889[1];
          undefined /* setApiDetails */;
          ;
          const v981 = 'rejected            ';
          null;
          const v982 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
          const v983 = v982[stdlib.checkedBigNumberify('./error_auction.rsh:140:49:application', stdlib.UInt_max, '0')];
          const v989 = stdlib.sub(v983, v983);
          const v991 = stdlib.Array_set(v982, '0', v989);
          const v992 = stdlib.Array_set(v850, stdlib.checkedBigNumberify('./error_auction.rsh:140:71:application', stdlib.UInt_max, '0'), v991);
          ;
          const v997 = stdlib.sub(v851, v851);
          ;
          const v998 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v998', ctc13, v998);
          const cv843 = false;
          const cv844 = v890;
          const cv850 = v992;
          const cv851 = v997;
          
          v843 = cv843;
          v844 = cv844;
          v850 = cv850;
          v851 = cv851;
          
          txn4 = txn5;
          continue;
          break;
          }
        }}
    
    }
  const v1027 = v850[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
  const v1028 = v1027[stdlib.checkedBigNumberify('./error_auction.rsh:154:25:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_acceptSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_rejectSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_stopAuction6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bidder_bid6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `ByAUAAEEBSAGKAizts+ICNK40bsOoJu8gQEHMFpie1BpcaCNBiYGAQABAQAY3xqJa2JpZFN1Y2Nlc3MAAAAAAAAAAAAAGN8aiWthY2NlcHRlZAAAAAAAAAAAAAAAAAECIjUAMRhBBy8qZEkiWzUBIQdbNQI2GgAXSUEAXCI1BCM1BkkhCAxAACNJIQkMQAAOIQkSRCo1/yg0/1BCAvchCBJEKjX/KTT/UEIC6UkhCgxAABAhChJENhoBNf8pNP9QQgCqgaCL6kwSRCo1/yg0/1AhB69QQgCVNhoCFzUENhoDNhoBF0klDEACnUkhBQxAAedJIQsMQABzIQsSRCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hDFs1/oAE4huzqbAyBjT+D0Q0/zEAEkQ0/zQDIQRbNAMhBls0/jQDVzggNANXWAEXNANXWQEXNAMhDVsyBjQDIQ5bNANXahE0AyEPW0IEqUghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpJVwAgNf8hBFs1/iEGWzX9IQxbNfxXOCA1+1dYARc1+ldZARc1+SENWzX4IQ5bNfdXahE19iEPWzX1STUFNfSABBQM5gg09FCwMgY0/AxENPQiVUAAYYAY3xqJa2VuZFN1Y2Nlc3MAAAAAAAAAAAAANP0WUDT4FlCwgAgAAAAAAAAC7DT9FjIGFlA0+BZQULA0/RYyBhZQNPgWUDUHNP80/jT9NPw0+zT6IjT4MgY09zT2NPVCA9M09FcBCDXzNPMXSTXyNPgNRDT1NPIINfE08ogFVYAIAAAAAAAAAy40+zT4FlBQsDT7NPgWUDUHNPpBACQrNP0WUDTyFlCwNP80/jT9NPwxACI0+TTyMgY09zT2NPFCA3OxIrIBNPiyCCOyEDT7sgezKzT9FlA08hZQsDT/NP40/TT8MQAiNPk08jIGNPc09jTxNPgJQgM8SCU0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEEWzX+IQZbNf1XMCA1/CEQWzX7V1gRNfohEVs1+YAEzJmSXLAyBjQDIRJbD0Q0/zEAEkQnBDT9FlA0+xZQsDT6VwARSTX4Ils197EisgE097ISJLIQNPyyFDT+shGzsSKyATT5sggjshA0/7IHszT/NP40/TT8NPsjMgY0+jT4NPdJCRZcAFwANPlJCUIDMUkjDEAB+kkkDEABSkglNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBFs1/iEGWzX9VzAgNfwhEFs1+1dYETX6IRFbNflJNQU1+IAErnvUBjT4ULAyBjQDIRJbDEQ0+CJVQABrJwQ0/RZQNPsWULA0+lcAEUk19yJbNfaxIrIBNPayEiSyEDT8shQ0/rIRs7EisgE0+bIII7IQNP+yB7OACQAAAAAAAAOVAbApNQc0/zT+NP00/DT7IjIGNPo09zT2SQkWXABcADT5SQlCAl6AGN8aiWtyZWplY3RlZAAAAAAAAAAAAAAAADT9FlA0+xZQsDT6VwARSTX3Ils19rEisgE09rISJLIQNP+yFDT+shGzsSKyATT5sggjshA0/LIHs4AJAAAAAAAAA+YAsCg1BzT/NP40/TT8NPsiMgY0+jT3NPZJCRZcAFwANPlJCUIB2yMSRCM0ARJENARJIhJMNAISEUQoZClkUCcFZFBJNQNJSklXACA1/yEEWzX+VyjJNf2B8QFbNfxX+RE1+4AEmouRdLA0+1cAETX6IzT+iAKeNP8xABJENP2BWFs1+YAEPoxs1jT5FlAxGBZQMgYWUDT9V2AyUDT9V7oPUDT9VwhQULA0/zT+NPk0/DT9IlsINP8jIyIyBjT8NPs0+kkiWyMIFlwAXAAiQgCNSCETiAImIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwjJNf6ABDssraA0/xZQNP5QsIERr0k1/UlXABEhB69cAFwANfwhE4gB47EisgEishIkshAyCrIUNP+yEbMxADT/FlA0/lAyBhZQNPxQKEsBVwB/ZylLAVd/f2cnBUsBV/4MZ0gjNQEyBjUCQgFONf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPc0/Q00+hBBAEM09DT1FlA09hZQNPcWUDT4UDT5FlEHCFApUDT7FlA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfwRnSCEFNQEyBjUCQgDogBjfGolrZG93bgAAAAAAAAAAAAAAAAAAAAA09hZQgAgAAAAAAAAAAVCwNPQ09TT2NPg0+yM0/DT+NP9CAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/EEANTT9gRQINfY09zT4FlA0+RZQNPpQNPsWUDT+UDT/FlA09hZQKEsBVwB5Z0glNQEyBjUCQgBesSKyATT+VwARIluyEiSyEDT6shQ0+LIRs7EisgE0/7III7IQNPeyB7OxIrIBIrISJLIQMgmyFTIKshQ0+LIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 266,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v646",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes16",
                        "name": "elem2",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes18",
                        "name": "elem1",
                        "type": "bytes18"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes15",
                    "name": "_title",
                    "type": "bytes15"
                  }
                ],
                "internalType": "struct T4",
                "name": "v647",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v646",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes16",
                        "name": "elem2",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes18",
                        "name": "elem1",
                        "type": "bytes18"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes15",
                    "name": "_title",
                    "type": "bytes15"
                  }
                ],
                "internalType": "struct T4",
                "name": "v647",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_acceptSale0_339",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_rejectSale0_339",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v889",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_stopAuction0_82",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Bidder_bid0_82",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v729",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockEnded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBid",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v748",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v814",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v917",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v998",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes18",
            "name": "elem1",
            "type": "bytes18"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "bytes15",
        "name": "v4",
        "type": "bytes15"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes16",
            "name": "elem2",
            "type": "bytes16"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "v5",
        "type": "tuple"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes20",
        "name": "v0",
        "type": "bytes20"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Auctioneer_acceptSale",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auctioneer_rejectSale",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auctioneer_stopAuction",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockEnded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBid",
            "type": "uint256"
          }
        ],
        "internalType": "struct T24",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T25",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_acceptSale0_339",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_rejectSale0_339",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v889",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_stopAuction0_82",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Bidder_bid0_82",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v729",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200337c3803806200337c8339810160408190526200002691620004f6565b60008055436003556200003862000217565b7f7e3588f52ab43423d1925104123ec2f6358751c5c79410e39cb72fa53a63843333836040516200006b929190620006c5565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528051825160608101845285815282515185015194810194909452905151820151151591830191909152620000d09290916200016a565b6040820152620000e334156007620001ed565b620000ed6200025e565b33815260208084018051516001600160a01b0316828401525181015160408084019190915243606084018190528482015160808501526001600081905555516200013a9183910162000720565b6040516020818303038152906040526002908051906020019062000160929190620002e9565b5050505062000816565b6200017462000378565b60005b6001811015620001ca578481600181106200019657620001966200070a565b6020020151828260018110620001b057620001b06200070a565b602002015280620001c181620007af565b91505062000177565b5081818460018110620001e157620001e16200070a565b60200201529392505050565b81620002135760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200024a62000378565b81526020016200025962000378565b905290565b6040805160a0808201835260008083526020808401829052845160e08101865282815285516060808201885284825281840185905281880185905282840191909152818701849052865180880188528481529283018490528101919091526080810182905291820181905260c082015290918201908152602001600081526020016200025962000378565b828054620002f790620007d9565b90600052602060002090601f0160209004810192826200031b576000855562000366565b82601f106200033657805160ff191683800117855562000366565b8280016001018555821562000366579182015b828111156200036657825182559160200191906001019062000349565b5062000374929150620003c5565b5090565b60405180602001604052806001905b620003ae604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003875790505090565b5b80821115620003745760008155600101620003c6565b604080519081016001600160401b03811182821017156200040d57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b03811182821017156200040d57634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156200040d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200048d57600080fd5b919050565b600060408284031215620004a557600080fd5b620004af620003dc565b8251815260208301519091506001600160701b031981168114620004d257600080fd5b602082015292915050565b80516001600160881b0319811681146200048d57600080fd5b60008183036101808112156200050b57600080fd5b62000515620003dc565b8351815261016080601f19840112156200052e57600080fd5b62000538620003dc565b620005466020870162000475565b815261014080603f19860112156200055d57600080fd5b6200056762000413565b604088015181526060605f19870112156200058157600080fd5b6200058b62000444565b606089015181526080890151602082015260a08901519096506001600160801b031981168114620005bb57600080fd5b8060408801525085602082015260c08801516040820152620005e18960e08a0162000492565b6060820152620005f5610120890162000475565b60808201528188015160a082015262000610848901620004dd565b60c082015280602084015250508060208401525050809250505092915050565b805182526020810151805160208401526020810151604084015260018060801b03196040820151166060840152506040810151608083015260608101516200068f60a0840182805182526020908101516001600160701b031916910152565b5060808101516001600160a01b031660e083015260a081015161010083015260c001516001600160881b03191661012090910152565b6001600160a01b0383811682528251602080840191909152808401518051909216604084015201516101a082019062000702606084018262000630565b509392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015161020084019290620007578386018262000630565b5060608086015161018086015260808601516101a0860160005b6001811015620007a3578251805183528581015186840152860151151586830152918401919083019060010162000771565b50505050505092915050565b6000600019821415620007d257634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620007ee57607f821691505b602082108114156200081057634e487b7160e01b600052602260045260246000fd5b50919050565b612b5680620008266000396000f3fe6080604052600436106100a55760003560e01c80638e314769116100615780638e3147691461014f578063ab53f2c614610162578063b627922414610185578063bf2c5b24146101bc578063d2526fd9146101cf578063ebf9fa3c146101d757005b80631e93b0f1146100ae5780632c10a159146100d25780632d2ae6eb146100e557806336054e531461010f5780636f49e23114610122578063832307571461013a57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e036600461209b565b6101ea565b6100ed61020e565b60408051825181526020808401519082015291810151908201526060016100c9565b6100ac61011d3660046120c5565b61023f565b61012a61025f565b60405190151581526020016100c9565b34801561014657600080fd5b506001546100bf565b6100ac61015d36600461209b565b610269565b34801561016e57600080fd5b50610177610289565b6040516100c992919061210d565b610198610193366004612147565b610326565b6040805182516001600160a01b0316815260209283015192810192909252016100c9565b6100ac6101ca36600461209b565b610349565b61012a610369565b6100ac6101e53660046120c5565b610373565b6101f2611c39565b61020a61020436849003840184612281565b82610393565b5050565b61023260405180606001604052806000815260200160008152602001600081525090565b61023a61069a565b905090565b610247611c39565b61020a610259368490038401846122e4565b826106ec565b600061023a610b33565b610271611c39565b61020a61028336849003840184612281565b82610b63565b60006060600054600280805461029e9061236e565b80601f01602080910402602001604051908101604052809291908181526020018280546102ca9061236e565b80156103175780601f106102ec57610100808354040283529160200191610317565b820191906000526020600020905b8154815290600101906020018083116102fa57829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261034382610dfb565b92915050565b610351611c39565b61020a61036336849003840184612281565b82610e48565b600061023a61103b565b61037b611c39565b61020a61038d368490038401846123a3565b82611068565b6103a3600160005414600b611633565b81516103be9015806103b757508251600154145b600c611633565b6000808055600280546103d09061236e565b80601f01602080910402602001604051908101604052809291908181526020018280546103fc9061236e565b80156104495780601f1061041e57610100808354040283529160200191610449565b820191906000526020600020905b81548152906001019060200180831161042c57829003601f168201915b5050505050806020019051810190610461919061255c565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161049492919061268a565b60405180910390a16104a834156008611633565b6104c26104bb3383602001516001611659565b6009611633565b80516104da906001600160a01b03163314600a611633565b6040818101518082015160608083015160c080850151602095860151875195865230868801524386890152835194860194909452918501516dffffffffffffffffffffffffffff191660808501526001600160881b031990911660a08401528151908301529182015160e08201529101516fffffffffffffffffffffffffffffffff19166101008201527f42501ca8d15eb04e579176e8148e5c5992b37e55e9c0407b1a6e528a505c9f07906101200160405180910390a161059a611c9e565b815181516001600160a01b039182169052602080840151835192169101526040808301805182015183519092019190915260608301519051516105dd9190611671565b81516060908101919091528251602080840180516001600160a01b0390931690925281516001908201819052825160409081018290528351600090860181905284514360809182015288870151955160a0019590955293870180518251968701835281515151909301865280515184015193860193909352915161067594919392820190835b602002015160400151151590526116be565b60208201805160c0019190915251600060e09091015261069481611732565b50505050565b6106be60405180606001604052806000815260200160008152602001600081525090565b6106c6611cd5565b602081015151600090526106d8611c39565b6106e28282611068565b6040015192915050565b6106fc600560005414600f611633565b815161071790158061071057508251600154145b6010611633565b6000808055600280546107299061236e565b80601f01602080910402602001604051908101604052809291908181526020018280546107559061236e565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b50505050508060200190518101906107ba91906126de565b60408051808201909152600080825260208201529091506107e28260e0015143106011611633565b7f4208286ebb06b5ded256694c66572f0ecc8422f937c57e9c5c3c3930244f3db83385604051610813929190612787565b60405180910390a16000602085015151516001811115610835576108356126c8565b1415610a25576108473415600d611633565b671858d8d95c1d195960c21b80825260408084015160808501519151600080516020612b018339815191529361087f939092916127da565b60405180910390a16108b6826020015183606001518460a001516000600181106108ab576108ab6126b2565b602002015151611912565b815160c08301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f3573d6000803e3d6000fd5b50604051600181527f9a7c4cdce5f05495479dd1f1fe189bb7e47208c679deb67005bf76907b149a949060200160405180910390a160018352610934611d1a565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855190910152818401805160009081905290514393019290925260a086018051825194850190925251610a02939192919081906109c190845b60200201515160a08a01515151900390565b81526020018760a001516000600181106109dd576109dd6126b2565b60200201516020015181526020018760a00151600060018110610663576106636126b2565b6020820151604001526000602082015160600152610a1f81611926565b50610694565b6001602085015151516001811115610a3f57610a3f6126c8565b141561069457610a513415600e611633565b671c995a9958dd195960c21b6020820181905260408084015160808501519151600080516020612b0183398151915293610a8d939092916127da565b60405180910390a16020820151825160a0840151610aae92919060006108ab565b81606001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015610aef573d6000803e3d6000fd5b50604051600081527f504c7a8115ce3123a336bd7dc9b5b05010bc50f8c4f01f1a45566b3d66e345789060200160405180910390a160006020840152610934611d1a565b6000610b3d611d58565b60208101515160019052610b4f611c39565b610b5982826106ec565b6020015192915050565b610b736005600054146014611633565b8151610b8e901580610b8757508251600154145b6015611633565b600080805560028054610ba09061236e565b80601f0160208091040260200160405190810160405280929190818152602001828054610bcc9061236e565b8015610c195780601f10610bee57610100808354040283529160200191610c19565b820191906000526020600020905b815481529060010190602001808311610bfc57829003601f168201915b5050505050806020019051810190610c3191906126de565b604080516020810190915260008152909150610c558260e001514310156016611633565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3385604051610c8692919061268a565b60405180910390a1610c9a34156012611633565b8151610cb2906001600160a01b031633146013611633565b671858d8d95c1d195960c21b80825260408084015160808501519151600080516020612b0183398151915293610cea939092916127da565b60405180910390a1610d16826020015183606001518460a001516000600181106108ab576108ab6126b2565b815160c08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610d53573d6000803e3d6000fd5b50610d5c611d1a565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855190910152818401805160019052514392019190915260a085018051825193840190925251610dd79260009181906109c190846109af565b6020820151604001526000602082015160600152610df481611926565b5050505050565b6040805180820190915260008082526020820152610e17611cd5565b6020810180515160019052515160400151839052610e33611c39565b610e3d8282611068565b606001519392505050565b610e58600660005414601f611633565b8151610e73901580610e6c57508251600154145b6020611633565b600080805560028054610e859061236e565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb19061236e565b8015610efe5780601f10610ed357610100808354040283529160200191610efe565b820191906000526020600020905b815481529060010190602001808311610ee157829003601f168201915b5050505050806020019051810190610f169190612801565b9050610f2a81606001514310156021611633565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051610f5b92919061268a565b60405180910390a1610f6f3415601d611633565b8051610f87906001600160a01b03163314601e611633565b610f8f611c9e565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151848701805191909616905260a080880151865190151595019490945260c080880151865190151594019390935260e0808801518651909301929092528451439101526101008601518451909301929092526101208501518351909101526101408401519151015261069481611732565b6000611045611d58565b60208101515160009052611057611c39565b61106182826106ec565b5192915050565b611078600660005414601a611633565b815161109390158061108c57508251600154145b601b611633565b6000808055600280546110a59061236e565b80601f01602080910402602001604051908101604052809291908181526020018280546110d19061236e565b801561111e5780601f106110f35761010080835404028352916020019161111e565b820191906000526020600020905b81548152906001019060200180831161110157829003601f168201915b50505050508060200190518101906111369190612801565b9050611140611d91565b61115182606001514310601c611633565b7f4cd91aa5ee5deed3c090467fe131d7c03e90b45dab71ab38512e3173a6a5f6d933856040516111829291906128bc565b60405180910390a160006020850151515160018111156111a4576111a46126c8565b1415611325576111b634156017611633565b69656e645375636365737360b01b80825260408084015160e08501519151600080516020612b01833981519152936111f0939092916127da565b60405180910390a1604080830151602080840180519290925281514391015260e084015181518301525190517f359e84c76495a7a2b27113ea2ae432f5ca4e78b9f9b931dc37d17b223b9dccf0916112639181518152602080830151908201526040918201519181019190915260600190565b60405180910390a16020810151604084015261127d611c9e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151848701805191909616905260a08089015186519015159501949094528451600093019290925260e080880151855190920191909152835143920191909152610100860151835190920191909152610120850151825160c0015261014085015191510152610a1f81611732565b600160208501515151600181111561133f5761133f6126c8565b14156106945760208401515160409081015190820181905260e0830151905161136a91106018611633565b6101408201516040820151805190910160608301525161138d9034146019611633565b60808083015190820180516001600160a01b0390921690915260e0830151815160200152516040517f976efccc462d02332ea9f728c5df918e2542061eafbba96496e0f76a6e1efe10916113fb9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a16080810151606084015260a0820151156114ff57696269645375636365737360b01b60c0820181905260408084015181840151519151600080516020612b0183398151915293611455939092916127da565b60405180910390a1611465611c9e565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015282840180513390528051600094019390935260c0808701518451901515908401529185015151835182015282514360809190910152610100860151835160a00152610120860151835190920191909152830151905160e00152610a1f81611732565b81608001516001600160a01b03166108fc8360e001519081150290604051600060405180830381858888f19350505050158015611540573d6000803e3d6000fd5b50696269645375636365737360b01b60a0820181905260408084015181840151519151600080516020612b018339815191529361157f939092916127da565b60405180910390a161158f611c9e565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015282840180513390528051600094019390935260c0808701518451901515908401529185015151835182015282514360809190910152610100860151835160a0015261012086015192519091019190915282015160e08401519003602082015160e00152610a1f81611732565b8161020a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061166783853085611a53565b90505b9392505050565b60008261167e8382612924565b91508110156103435760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611650565b6116c6611e2b565b60005b6001811015611712578481600181106116e4576116e46126b2565b60200201518282600181106116fb576116fb6126b2565b60200201528061170a8161293c565b9150506116c9565b5081818460018110611726576117266126b2565b60200201529392505050565b604080516020810190915260008152602082015160a001518251606001511161175c576000611766565b8160200151604001515b1561183f57611773611e76565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528551606090810151818601528287018051519094166080808701919091528451840151151560a0870152600160c080880182905286519093015160e080890191909152865190920151610100880152855190920151610120870152935190930151610140850152600660005543909255905161181b91839101612995565b60405160208183030381529060405260029080519060200190610694929190611ef5565b633237bbb760e11b80825282516040908101519051600080516020612b01833981519152926118729290916001906127da565b60405180910390a1611882611d1a565b82515181516001600160a01b0391821690528351602090810151835190831690820152845160409081015184518201528186018051518551941660609485015280518401518551608090810191909152838601805160019052825190910151815190940193909352805160c001518351909201919091525160e0015190519091015261190d81611926565b505050565b61191d838383611b2d565b61190d57600080fd5b604080516020810190915260008152602082015151156119d7576119538260200151602001516014611671565b815261195d611f79565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015190931683850152855160809081015190850152818601805182015160a0860152519092015160c0840152835160e0840152600560005543600155905161181b91839101612a56565b815160208082015160609092015190840151604001516119fa92919060006108ab565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611a3c573d6000803e3d6000fd5b506000808055600181905561020a90600290611fdf565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611aba91612ac7565b60006040518083038185875af1925050503d8060008114611af7576040519150601f19603f3d011682016040523d82523d6000602084013e611afc565b606091505b5091509150611b0d82826001611bfe565b5080806020019051810190611b229190612ae3565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611b8c91612ac7565b60006040518083038185875af1925050503d8060008114611bc9576040519150601f19603f3d011682016040523d82523d6000602084013e611bce565b606091505b5091509150611bdf82826002611bfe565b5080806020019051810190611bf49190612ae3565b9695505050505050565b60608315611c0d57508161166a565b825115611c1d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611650565b6040518060800160405280600015158152602001600015158152602001611c7a60405180606001604052806000815260200160008152602001600081525090565b8152602001611c99604080518082019091526000808252602082015290565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611c9961201c565b604051806040016040528060008152602001611c9960408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290815260208101611c99612067565b604051806040016040528060008152602001611c9960408051608081018252600060208201818152928201819052606082015290815290565b6040518060e0016040528060006bffffffffffffffffffffffff19168152602001611dd660405180606001604052806000815260200160008152602001600081525090565b8152602001611df16040518060200160405280600081525090565b815260200160008152602001611e17604080518082019091526000808252602082015290565b815260006020820181905260409091015290565b60405180602001604052806001905b611e60604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611e3a5790505090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000151581526020016000151581526020016000815260200160008152602001611ee8611e2b565b8152602001600081525090565b828054611f019061236e565b90600052602060002090601f016020900481019282611f235760008555611f69565b82601f10611f3c57805160ff1916838001178555611f69565b82800160010185558215611f69579182015b82811115611f69578251825591602001919060010190611f4e565b50611f75929150612086565b5090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611fcb611e2b565b815260200160008152602001600081525090565b508054611feb9061236e565b6000825580601f10611ffb575050565b601f0160209004906000526020600020908101906120199190612086565b50565b60405180610100016040528060006001600160a01b03168152602001600015158152602001600015158152602001600081526020016000815260200160008152602001611ee8611e2b565b6040805160808101825260008082526020820152908101611ee8611e2b565b5b80821115611f755760008155600101612087565b6000604082840312156120ad57600080fd5b50919050565b6000608082840312156120ad57600080fd5b6000608082840312156120d757600080fd5b61166a83836120b3565b60005b838110156120fc5781810151838201526020016120e4565b838111156106945750506000910152565b82815260406020820152600082518060408401526121328160608501602087016120e1565b601f01601f1916919091016060019392505050565b60006020828403121561215957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561219957612199612160565b60405290565b6040516020810167ffffffffffffffff8111828210171561219957612199612160565b6040516060810167ffffffffffffffff8111828210171561219957612199612160565b60405160a0810167ffffffffffffffff8111828210171561219957612199612160565b60405160e0810167ffffffffffffffff8111828210171561219957612199612160565b604051610100810167ffffffffffffffff8111828210171561219957612199612160565b604051610160810167ffffffffffffffff8111828210171561219957612199612160565b801515811461201957600080fd5b60006040828403121561229357600080fd5b6040516040810181811067ffffffffffffffff821117156122b6576122b6612160565b6040528235815260208301356122cb81612273565b60208201529392505050565b6002811061201957600080fd5b600081830360808112156122f757600080fd5b6122ff612176565b833581526060601f198301121561231557600080fd5b61231d61219f565b91506123276121c2565b6020850135612335816122d7565b8152604085013561234581612273565b6020820152606085013561235881612273565b6040820152825260208101919091529392505050565b600181811c9082168061238257607f821691505b602082108114156120ad57634e487b7160e01b600052602260045260246000fd5b600081830360808112156123b657600080fd5b6123be612176565b833581526060601f19830112156123d457600080fd5b6123dc61219f565b6123e46121c2565b60208601356123f2816122d7565b8152604086013561240281612273565b806020830152506020605f198501121561241b57600080fd5b61242361219f565b60609690960135865260408101959095529384526020810193909352509092915050565b80516001600160a01b038116811461245e57600080fd5b919050565b60006040828403121561247557600080fd5b61247d612176565b90508151815260208201516dffffffffffffffffffffffffffff19811681146124a557600080fd5b602082015292915050565b80516001600160881b03198116811461245e57600080fd5b805161245e81612273565b600082601f8301126124e457600080fd5b6124ec61219f565b806060808501868111156124ff57600080fd5b855b81811015612550578281890312156125195760008081fd5b6125216121c2565b815181526020808301518183015260408084015161253e81612273565b90830152908652909401938201612501565b50919695505050505050565b600081830361020081121561257057600080fd5b6125786121e5565b61258184612447565b815261258f60208501612447565b602082015261014080603f19840112156125a857600080fd5b6125b0612208565b604086015181526060605f19850112156125c957600080fd5b6125d16121c2565b9350606086015184526080860151602085015260a08601516fffffffffffffffffffffffffffffffff198116811461260857600080fd5b8060408601525083602082015260c0860151604082015261262c8760e08801612463565b606082015261263e6101208701612447565b60808201528186015160a082015261265961016087016124b0565b60c0820152604083015250610180840151606082015261267d856101a086016124d3565b6080820152949350505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600061014082840312156126f157600080fd5b6126f961222b565b61270283612447565b815261271060208401612447565b60208201526040830151604082015261272b60608401612447565b6060820152608083015160808201526127478460a085016124d3565b60a082015261010083015160c08201526101209092015160e083015250919050565b6002811061201957634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160a0830191906127b381612769565b80604085015250602081015115156060840152604081015115156080840152509392505050565b6bffffffffffffffffffffffff199390931683526020830191909152604082015260600190565b60006101a0828403121561281457600080fd5b61281c61224f565b61282583612447565b815261283360208401612447565b6020820152604083015160408201526060830151606082015261285860808401612447565b608082015261286960a084016124c8565b60a082015261287a60c084016124c8565b60c082015260e083015160e08201526101008084015181830152506101206128a4858286016124d3565b90820152610180929092015161014083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906128e881612769565b806040850152506020810151151560608401526040810151516080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156129375761293761290e565b500190565b60006000198214156129505761295061290e565b5060010190565b8060005b600181101561069457815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161295b565b81516001600160a01b031681526101a0810160208301516129c160208401826001600160a01b03169052565b50604083015160408301526060830151606083015260808301516129f060808401826001600160a01b03169052565b5060a0830151612a0460a084018215159052565b5060c0830151612a1860c084018215159052565b5060e083015160e083015261010080840151818401525061012080840151612a4282850182612957565b505061014083015161018083015292915050565b60006101408201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152506080830151608083015260a0830151612aab60a0840182612957565b5060c083015161010083015260e0909201516101209091015290565b60008251612ad98184602087016120e1565b9190910192915050565b600060208284031215612af557600080fd5b815161166a8161227356feacf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21a2646970667358221220be1a924b74ed2a619c6aadfc587a8b1f99465bd022e1fe877847928cf0435cdd64736f6c634300080c0033`,
  BytecodeLen: 13180,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './error_auction.rsh:52:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './error_auction.rsh:156:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './error_auction.rsh:113:48:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './error_auction.rsh:66:83:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid
    }
  };
