// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  return {
    created: [ctc0, ctc1, ctc2],
    down: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc1],
    log: [ctc0, ctc1, ctc1],
    outcome: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      6: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc2, ctc9, ctc2],
      7: [ctc0, ctc1, ctc6, ctc10, ctc2, ctc0, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
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
export async function _Auctioneer_acceptSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc7,
    Auctioneer_rejectSale0_432: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v674, v675, v722, v746, v749, v1121, v1130, v1131] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1140 = ctc.selfAddress();
  const v1142 = stdlib.protect(ctc7, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:186:28:application call to [unknown function] (defined at: ./auction.rsh:186:28:function exp)', 'at ./auction.rsh:180:58:application call to "runAuctioneer_acceptSale0_432" (defined at: ./auction.rsh:184:21:function exp)', 'at ./auction.rsh:180:58:application call to [unknown function] (defined at: ./auction.rsh:180:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1144 = stdlib.addressEq(v1140, v674);
  stdlib.assert(v1144, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:187:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:186:28:application call to [unknown function] (defined at: ./auction.rsh:186:28:function exp)', 'at ./auction.rsh:186:28:application call to [unknown function] (defined at: ./auction.rsh:186:28:function exp)', 'at ./auction.rsh:180:58:application call to "runAuctioneer_acceptSale0_432" (defined at: ./auction.rsh:184:21:function exp)', 'at ./auction.rsh:180:58:application call to [unknown function] (defined at: ./auction.rsh:180:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1148 = ['Auctioneer_acceptSale0_432', v1142];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v722, v746, v749, v1121, v1130, v1131, v1148],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:189:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
      
      switch (v1163[0]) {
        case 'Auctioneer_acceptSale0_432': {
          const v1166 = v1163[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1173 = true;
          const v1174 = await txn1.getOutput('Auctioneer_acceptSale', 'v1173', ctc4, v1173);
          
          const v2933 = v1130;
          const v2934 = v1131;
          const v2935 = stdlib.le(v1164, v1121);
          const v2936 = v2935 ? false : false;
          if (v2936) {
            sim_r.isHalt = false;
            }
          else {
            const v2937 = v1130[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v2938 = v2937[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: undefined /* Nothing */
              });
            const v2939 = 'accepted            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_432': {
          const v1188 = v1163[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
  switch (v1163[0]) {
    case 'Auctioneer_acceptSale0_432': {
      const v1166 = v1163[1];
      undefined /* setApiDetails */;
      ;
      const v1173 = true;
      const v1174 = await txn1.getOutput('Auctioneer_acceptSale', 'v1173', ctc4, v1173);
      if (v557) {
        stdlib.protect(ctc9, await interact.out(v1166, v1174), {
          at: './auction.rsh:185:25:application',
          fs: ['at ./auction.rsh:185:25:application call to [unknown function] (defined at: ./auction.rsh:185:25:function exp)', 'at ./auction.rsh:191:39:application call to "notify" (defined at: ./auction.rsh:190:34:function exp)', 'at ./auction.rsh:190:34:application call to [unknown function] (defined at: ./auction.rsh:190:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v2933 = v1130;
      const v2934 = v1131;
      const v2935 = stdlib.le(v1164, v1121);
      const v2936 = v2935 ? false : false;
      if (v2936) {
        return;
        }
      else {
        const v2937 = v1130[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
        const v2938 = v2937[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        const v2939 = 'accepted            ';
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_432': {
      const v1188 = v1163[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc7,
    Auctioneer_rejectSale0_432: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v674, v675, v722, v746, v749, v1121, v1130, v1131] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1150 = ctc.selfAddress();
  const v1152 = stdlib.protect(ctc7, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:197:28:application call to [unknown function] (defined at: ./auction.rsh:197:28:function exp)', 'at ./auction.rsh:180:58:application call to "runAuctioneer_rejectSale0_432" (defined at: ./auction.rsh:195:21:function exp)', 'at ./auction.rsh:180:58:application call to [unknown function] (defined at: ./auction.rsh:180:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1154 = stdlib.addressEq(v1150, v674);
  stdlib.assert(v1154, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:198:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:197:28:application call to [unknown function] (defined at: ./auction.rsh:197:28:function exp)', 'at ./auction.rsh:197:28:application call to [unknown function] (defined at: ./auction.rsh:197:28:function exp)', 'at ./auction.rsh:180:58:application call to "runAuctioneer_rejectSale0_432" (defined at: ./auction.rsh:195:21:function exp)', 'at ./auction.rsh:180:58:application call to [unknown function] (defined at: ./auction.rsh:180:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1158 = ['Auctioneer_rejectSale0_432', v1152];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v722, v746, v749, v1121, v1130, v1131, v1158],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:200:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
      
      switch (v1163[0]) {
        case 'Auctioneer_acceptSale0_432': {
          const v1166 = v1163[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_432': {
          const v1188 = v1163[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1203 = false;
          const v1204 = await txn1.getOutput('Auctioneer_rejectSale', 'v1203', ctc4, v1203);
          
          const v2972 = v1130;
          const v2973 = v1131;
          const v2974 = stdlib.le(v1164, v1121);
          const v2975 = v2974 ? false : false;
          if (v2975) {
            sim_r.isHalt = false;
            }
          else {
            const v2979 = v1130[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            const v2980 = v2979[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v2981 = 'rejected            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
  switch (v1163[0]) {
    case 'Auctioneer_acceptSale0_432': {
      const v1166 = v1163[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_432': {
      const v1188 = v1163[1];
      undefined /* setApiDetails */;
      ;
      const v1203 = false;
      const v1204 = await txn1.getOutput('Auctioneer_rejectSale', 'v1203', ctc4, v1203);
      if (v557) {
        stdlib.protect(ctc9, await interact.out(v1188, v1204), {
          at: './auction.rsh:196:25:application',
          fs: ['at ./auction.rsh:196:25:application call to [unknown function] (defined at: ./auction.rsh:196:25:function exp)', 'at ./auction.rsh:202:39:application call to "notify" (defined at: ./auction.rsh:201:34:function exp)', 'at ./auction.rsh:201:34:application call to [unknown function] (defined at: ./auction.rsh:201:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v2972 = v1130;
      const v2973 = v1131;
      const v2974 = stdlib.le(v1164, v1121);
      const v2975 = v2974 ? false : false;
      if (v2975) {
        return;
        }
      else {
        const v2979 = v1130[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
        const v2980 = v2979[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        const v2981 = 'rejected            ';
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v768 = ctc.selfAddress();
  const v770 = stdlib.protect(ctc3, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:149:36:application call to [unknown function] (defined at: ./auction.rsh:149:36:function exp)', 'at ./auction.rsh:104:31:application call to "runAuctioneer_stopAuction0_124" (defined at: ./auction.rsh:147:29:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v772 = stdlib.addressEq(v768, v674);
  stdlib.assert(v772, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:150:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:149:36:application call to [unknown function] (defined at: ./auction.rsh:149:36:function exp)', 'at ./auction.rsh:149:36:application call to [unknown function] (defined at: ./auction.rsh:149:36:function exp)', 'at ./auction.rsh:104:31:application call to "runAuctioneer_stopAuction0_124" (defined at: ./auction.rsh:147:29:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v776 = ['Auctioneer_stopAuction0_124', v770];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v776],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:152:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v824 = 'endSuccess          ';
          null;
          const v825 = {
            blockEnded: v808,
            id: v701,
            lastBid: v749
            };
          const v826 = await txn1.getOutput('Auctioneer_stopAuction', 'v825', ctc6, v825);
          
          const v2982 = v825;
          const v2983 = v746;
          const v2984 = v747;
          const v2985 = false;
          const v2986 = v749;
          const v2988 = v756;
          const v2989 = v757;
          const v2990 = stdlib.le(v808, v742);
          const v2991 = v2990 ? false : false;
          if (v2991) {
            sim_r.isHalt = false;
            }
          else {
            const v2992 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v677,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v2993 = await txn1.getOutput('internal', 'v2992', ctc13, v2992);
            const v2994 = v2993[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v2995 = stdlib.add(v757, v2994);
            const v2997 = 'down                ';
            null;
            const v2998 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3026 = v756;
            const v3027 = v2995;
            const v3028 = stdlib.le(v808, v2998);
            if (v3028) {
              sim_r.isHalt = false;
              }
            else {
              const v3030 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v3031 = v3030[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v746,
                tok: v675
                });
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v3032 = 'accepted            ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v675
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      undefined /* setApiDetails */;
      ;
      const v824 = 'endSuccess          ';
      null;
      const v825 = {
        blockEnded: v808,
        id: v701,
        lastBid: v749
        };
      const v826 = await txn1.getOutput('Auctioneer_stopAuction', 'v825', ctc6, v825);
      if (v318) {
        stdlib.protect(ctc12, await interact.out(v810, v826), {
          at: './auction.rsh:148:33:application',
          fs: ['at ./auction.rsh:148:33:application call to [unknown function] (defined at: ./auction.rsh:148:33:function exp)', 'at ./auction.rsh:160:47:application call to "notify" (defined at: ./auction.rsh:153:42:function exp)', 'at ./auction.rsh:153:42:application call to [unknown function] (defined at: ./auction.rsh:153:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2982 = v825;
      const v2983 = v746;
      const v2984 = v747;
      const v2985 = false;
      const v2986 = v749;
      const v2988 = v756;
      const v2989 = v757;
      const v2990 = stdlib.le(v808, v742);
      const v2991 = v2990 ? false : false;
      if (v2991) {
        return;
        }
      else {
        const v2992 = undefined /* Remote */;
        const v2993 = await txn1.getOutput('internal', 'v2992', ctc13, v2992);
        const v2994 = v2993[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
        const v2995 = stdlib.add(v757, v2994);
        const v2996 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2994);
        stdlib.assert(v2996, {
          at: './auction.rsh:165:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        const v2997 = 'down                ';
        null;
        const v2998 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v3026 = v756;
        const v3027 = v2995;
        const v3028 = stdlib.le(v808, v2998);
        if (v3028) {
          return;
          }
        else {
          const v3030 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
          const v3031 = v3030[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          const v3032 = 'accepted            ';
          null;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      return;
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Tuple([ctc4, ctc13]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v780 = stdlib.protect(ctc10, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:121:49:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to "runBidder_bid0_124" (defined at: ./auction.rsh:121:30:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v781 = v780[stdlib.checkedBigNumberify('./auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v783 = stdlib.gt(v781, v749);
  stdlib.assert(v783, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:121:49:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to "runBidder_bid0_124" (defined at: ./auction.rsh:121:30:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v790 = ['Bidder_bid0_124', v780];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v790],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v781, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v913 = v907[stdlib.checkedBigNumberify('./auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
          const v918 = stdlib.add(v757, v913);
          sim_r.txns.push({
            amt: v913,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v939 = [v746, v749];
          const v940 = await txn1.getOutput('Bidder_bid', 'v939', ctc12, v939);
          
          if (v747) {
            const v955 = 'bidSuccess          ';
            null;
            const v3414 = v745;
            const v3415 = v806;
            const v3416 = false;
            const v3417 = v748;
            const v3418 = v913;
            const v3420 = v756;
            const v3421 = v918;
            const v3422 = stdlib.le(v808, v742);
            const v3423 = v3422 ? v748 : false;
            if (v3423) {
              sim_r.isHalt = false;
              }
            else {
              const v3424 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v677,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
              const v3425 = await txn1.getOutput('internal', 'v3424', ctc14, v3424);
              const v3426 = v3425[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
              const v3427 = stdlib.add(v918, v3426);
              const v3429 = 'down                ';
              null;
              const v3430 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3458 = v756;
              const v3459 = v3427;
              const v3460 = stdlib.le(v808, v3430);
              if (v3460) {
                sim_r.isHalt = false;
                }
              else {
                const v3462 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                const v3463 = v3462[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v806,
                  tok: v675
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v674,
                  tok: undefined /* Nothing */
                  });
                const v3464 = 'accepted            ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v675
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v952 = stdlib.sub(v918, v749);
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v953 = 'bidSuccess          ';
            null;
            const v3468 = v745;
            const v3469 = v806;
            const v3470 = false;
            const v3471 = v748;
            const v3472 = v913;
            const v3474 = v756;
            const v3475 = v952;
            const v3476 = stdlib.le(v808, v742);
            const v3477 = v3476 ? v748 : false;
            if (v3477) {
              sim_r.isHalt = false;
              }
            else {
              const v3478 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v677,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
              const v3479 = await txn1.getOutput('internal', 'v3478', ctc14, v3478);
              const v3480 = v3479[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
              const v3481 = stdlib.add(v952, v3480);
              const v3483 = 'down                ';
              null;
              const v3484 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3512 = v756;
              const v3513 = v3481;
              const v3514 = stdlib.le(v808, v3484);
              if (v3514) {
                sim_r.isHalt = false;
                }
              else {
                const v3516 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                const v3517 = v3516[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v806,
                  tok: v675
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v674,
                  tok: undefined /* Nothing */
                  });
                const v3518 = 'accepted            ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v675
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      return;
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      undefined /* setApiDetails */;
      const v913 = v907[stdlib.checkedBigNumberify('./auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
      const v914 = stdlib.gt(v913, v749);
      stdlib.assert(v914, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:121:49:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v918 = stdlib.add(v757, v913);
      ;
      const v939 = [v746, v749];
      const v940 = await txn1.getOutput('Bidder_bid', 'v939', ctc12, v939);
      if (v318) {
        stdlib.protect(ctc13, await interact.out(v907, v940), {
          at: './auction.rsh:121:31:application',
          fs: ['at ./auction.rsh:121:31:application call to [unknown function] (defined at: ./auction.rsh:121:31:function exp)', 'at ./auction.rsh:126:55:application call to "notify" (defined at: ./auction.rsh:125:50:function exp)', 'at ./auction.rsh:125:50:application call to [unknown function] (defined at: ./auction.rsh:125:50:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v747) {
        const v955 = 'bidSuccess          ';
        null;
        const v3414 = v745;
        const v3415 = v806;
        const v3416 = false;
        const v3417 = v748;
        const v3418 = v913;
        const v3420 = v756;
        const v3421 = v918;
        const v3422 = stdlib.le(v808, v742);
        const v3423 = v3422 ? v748 : false;
        if (v3423) {
          return;
          }
        else {
          const v3424 = undefined /* Remote */;
          const v3425 = await txn1.getOutput('internal', 'v3424', ctc14, v3424);
          const v3426 = v3425[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
          const v3427 = stdlib.add(v918, v3426);
          const v3428 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3426);
          stdlib.assert(v3428, {
            at: './auction.rsh:165:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          const v3429 = 'down                ';
          null;
          const v3430 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3458 = v756;
          const v3459 = v3427;
          const v3460 = stdlib.le(v808, v3430);
          if (v3460) {
            return;
            }
          else {
            const v3462 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v3463 = v3462[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            const v3464 = 'accepted            ';
            null;
            return;
            }}}
      else {
        const v952 = stdlib.sub(v918, v749);
        ;
        const v953 = 'bidSuccess          ';
        null;
        const v3468 = v745;
        const v3469 = v806;
        const v3470 = false;
        const v3471 = v748;
        const v3472 = v913;
        const v3474 = v756;
        const v3475 = v952;
        const v3476 = stdlib.le(v808, v742);
        const v3477 = v3476 ? v748 : false;
        if (v3477) {
          return;
          }
        else {
          const v3478 = undefined /* Remote */;
          const v3479 = await txn1.getOutput('internal', 'v3478', ctc14, v3478);
          const v3480 = v3479[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
          const v3481 = stdlib.add(v952, v3480);
          const v3482 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3480);
          stdlib.assert(v3482, {
            at: './auction.rsh:165:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          const v3483 = 'down                ';
          null;
          const v3484 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3512 = v756;
          const v3513 = v3481;
          const v3514 = stdlib.le(v808, v3484);
          if (v3514) {
            return;
            }
          else {
            const v3516 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v3517 = v3516[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            const v3518 = 'accepted            ';
            null;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v794 = stdlib.protect(ctc3, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:134:48:application call to [unknown function] (defined at: ./auction.rsh:134:48:function exp)', 'at ./auction.rsh:104:31:application call to "runBidder_optIn0_124" (defined at: ./auction.rsh:134:30:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v798 = ['Bidder_optIn0_124', v794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v798],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
          if (v1056) {
            const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v714,
              tok: undefined /* Nothing */
              });
            const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            if (v1062) {
              const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v1067 = true;
              const v1068 = await txn1.getOutput('Bidder_optIn', 'v1067', ctc7, v1067);
              
              const v3900 = v745;
              const v3901 = v746;
              const v3902 = v747;
              const v3903 = v748;
              const v3904 = v749;
              const v3906 = v756;
              const v3907 = v1066;
              const v3908 = stdlib.le(v808, v742);
              const v3909 = v3908 ? v748 : false;
              if (v3909) {
                sim_r.isHalt = false;
                }
              else {
                const v3910 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
                const v3911 = await txn1.getOutput('internal', 'v3910', ctc13, v3910);
                const v3912 = v3911[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v3913 = stdlib.add(v1066, v3912);
                const v3915 = 'down                ';
                null;
                const v3916 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3944 = v756;
                const v3945 = v3913;
                const v3946 = stdlib.le(v808, v3916);
                if (v3946) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3948 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v3949 = v3948[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v3950 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1074 = true;
              const v1075 = await txn1.getOutput('Bidder_optIn', 'v1074', ctc7, v1074);
              
              const v3954 = v745;
              const v3955 = v746;
              const v3956 = v747;
              const v3957 = v748;
              const v3958 = v749;
              const v3960 = v756;
              const v3961 = v1060;
              const v3962 = stdlib.le(v808, v742);
              const v3963 = v3962 ? v748 : false;
              if (v3963) {
                sim_r.isHalt = false;
                }
              else {
                const v3964 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
                const v3965 = await txn1.getOutput('internal', 'v3964', ctc13, v3964);
                const v3966 = v3965[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v3967 = stdlib.add(v1060, v3966);
                const v3969 = 'down                ';
                null;
                const v3970 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3998 = v756;
                const v3999 = v3967;
                const v4000 = stdlib.le(v808, v3970);
                if (v4000) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4002 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4003 = v4002[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4004 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            if (v1082) {
              const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v1087 = true;
              const v1088 = await txn1.getOutput('Bidder_optIn', 'v1087', ctc7, v1087);
              
              const v4008 = v745;
              const v4009 = v746;
              const v4010 = v747;
              const v4011 = v748;
              const v4012 = v749;
              const v4014 = v756;
              const v4015 = v1086;
              const v4016 = stdlib.le(v808, v742);
              const v4017 = v4016 ? v748 : false;
              if (v4017) {
                sim_r.isHalt = false;
                }
              else {
                const v4018 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
                const v4019 = await txn1.getOutput('internal', 'v4018', ctc13, v4018);
                const v4020 = v4019[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v4021 = stdlib.add(v1086, v4020);
                const v4023 = 'down                ';
                null;
                const v4024 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v4052 = v756;
                const v4053 = v4021;
                const v4054 = stdlib.le(v808, v4024);
                if (v4054) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4056 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4057 = v4056[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4058 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1094 = true;
              const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
              
              const v4062 = v745;
              const v4063 = v746;
              const v4064 = v747;
              const v4065 = v748;
              const v4066 = v749;
              const v4068 = v756;
              const v4069 = v1015;
              const v4070 = stdlib.le(v808, v742);
              const v4071 = v4070 ? v748 : false;
              if (v4071) {
                sim_r.isHalt = false;
                }
              else {
                const v4072 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
                const v4073 = await txn1.getOutput('internal', 'v4072', ctc13, v4072);
                const v4074 = v4073[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v4075 = stdlib.add(v1015, v4074);
                const v4077 = 'down                ';
                null;
                const v4078 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v4106 = v756;
                const v4107 = v4075;
                const v4108 = stdlib.le(v808, v4078);
                if (v4108) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4110 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4111 = v4110[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4112 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      return;
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      return;
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      undefined /* setApiDetails */;
      const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
      if (v1056) {
        const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
        if (v1062) {
          const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1067 = true;
          const v1068 = await txn1.getOutput('Bidder_optIn', 'v1067', ctc7, v1067);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1068), {
              at: './auction.rsh:134:31:application',
              fs: ['at ./auction.rsh:134:31:application call to [unknown function] (defined at: ./auction.rsh:134:31:function exp)', 'at ./auction.rsh:142:55:application call to "notify" (defined at: ./auction.rsh:137:50:function exp)', 'at ./auction.rsh:137:50:application call to [unknown function] (defined at: ./auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3900 = v745;
          const v3901 = v746;
          const v3902 = v747;
          const v3903 = v748;
          const v3904 = v749;
          const v3906 = v756;
          const v3907 = v1066;
          const v3908 = stdlib.le(v808, v742);
          const v3909 = v3908 ? v748 : false;
          if (v3909) {
            return;
            }
          else {
            const v3910 = undefined /* Remote */;
            const v3911 = await txn1.getOutput('internal', 'v3910', ctc13, v3910);
            const v3912 = v3911[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v3913 = stdlib.add(v1066, v3912);
            const v3914 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3912);
            stdlib.assert(v3914, {
              at: './auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v3915 = 'down                ';
            null;
            const v3916 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3944 = v756;
            const v3945 = v3913;
            const v3946 = stdlib.le(v808, v3916);
            if (v3946) {
              return;
              }
            else {
              const v3948 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v3949 = v3948[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v3950 = 'accepted            ';
              null;
              return;
              }}}
        else {
          const v1074 = true;
          const v1075 = await txn1.getOutput('Bidder_optIn', 'v1074', ctc7, v1074);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1075), {
              at: './auction.rsh:134:31:application',
              fs: ['at ./auction.rsh:134:31:application call to [unknown function] (defined at: ./auction.rsh:134:31:function exp)', 'at ./auction.rsh:142:55:application call to "notify" (defined at: ./auction.rsh:137:50:function exp)', 'at ./auction.rsh:137:50:application call to [unknown function] (defined at: ./auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3954 = v745;
          const v3955 = v746;
          const v3956 = v747;
          const v3957 = v748;
          const v3958 = v749;
          const v3960 = v756;
          const v3961 = v1060;
          const v3962 = stdlib.le(v808, v742);
          const v3963 = v3962 ? v748 : false;
          if (v3963) {
            return;
            }
          else {
            const v3964 = undefined /* Remote */;
            const v3965 = await txn1.getOutput('internal', 'v3964', ctc13, v3964);
            const v3966 = v3965[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v3967 = stdlib.add(v1060, v3966);
            const v3968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3966);
            stdlib.assert(v3968, {
              at: './auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v3969 = 'down                ';
            null;
            const v3970 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3998 = v756;
            const v3999 = v3967;
            const v4000 = stdlib.le(v808, v3970);
            if (v4000) {
              return;
              }
            else {
              const v4002 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4003 = v4002[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4004 = 'accepted            ';
              null;
              return;
              }}}}
      else {
        const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
        if (v1082) {
          const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1087 = true;
          const v1088 = await txn1.getOutput('Bidder_optIn', 'v1087', ctc7, v1087);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1088), {
              at: './auction.rsh:134:31:application',
              fs: ['at ./auction.rsh:134:31:application call to [unknown function] (defined at: ./auction.rsh:134:31:function exp)', 'at ./auction.rsh:142:55:application call to "notify" (defined at: ./auction.rsh:137:50:function exp)', 'at ./auction.rsh:137:50:application call to [unknown function] (defined at: ./auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4008 = v745;
          const v4009 = v746;
          const v4010 = v747;
          const v4011 = v748;
          const v4012 = v749;
          const v4014 = v756;
          const v4015 = v1086;
          const v4016 = stdlib.le(v808, v742);
          const v4017 = v4016 ? v748 : false;
          if (v4017) {
            return;
            }
          else {
            const v4018 = undefined /* Remote */;
            const v4019 = await txn1.getOutput('internal', 'v4018', ctc13, v4018);
            const v4020 = v4019[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v4021 = stdlib.add(v1086, v4020);
            const v4022 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4020);
            stdlib.assert(v4022, {
              at: './auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v4023 = 'down                ';
            null;
            const v4024 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v4052 = v756;
            const v4053 = v4021;
            const v4054 = stdlib.le(v808, v4024);
            if (v4054) {
              return;
              }
            else {
              const v4056 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4057 = v4056[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4058 = 'accepted            ';
              null;
              return;
              }}}
        else {
          const v1094 = true;
          const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1095), {
              at: './auction.rsh:134:31:application',
              fs: ['at ./auction.rsh:134:31:application call to [unknown function] (defined at: ./auction.rsh:134:31:function exp)', 'at ./auction.rsh:142:55:application call to "notify" (defined at: ./auction.rsh:137:50:function exp)', 'at ./auction.rsh:137:50:application call to [unknown function] (defined at: ./auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4062 = v745;
          const v4063 = v746;
          const v4064 = v747;
          const v4065 = v748;
          const v4066 = v749;
          const v4068 = v756;
          const v4069 = v1015;
          const v4070 = stdlib.le(v808, v742);
          const v4071 = v4070 ? v748 : false;
          if (v4071) {
            return;
            }
          else {
            const v4072 = undefined /* Remote */;
            const v4073 = await txn1.getOutput('internal', 'v4072', ctc13, v4072);
            const v4074 = v4073[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v4075 = stdlib.add(v1015, v4074);
            const v4076 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4074);
            stdlib.assert(v4076, {
              at: './auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v4077 = 'down                ';
            null;
            const v4078 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v4106 = v756;
            const v4107 = v4075;
            const v4108 = stdlib.le(v808, v4078);
            if (v4108) {
              return;
              }
            else {
              const v4110 = v756[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4111 = v4110[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4112 = 'accepted            ';
              null;
              return;
              }}}}
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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    adminContract: ctc0,
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc12,
    Bidder_bid0_124: ctc13,
    Bidder_optIn0_124: ctc12
    });
  const ctc15 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc12,
    Auctioneer_rejectSale0_432: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v651 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v652 = [v651];
  const v656 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v657 = v656.adminContract;
  const v658 = v656.deadline;
  const v659 = v656.description;
  const v660 = v656.owner;
  const v661 = v656.price;
  const v662 = v656.title;
  const v663 = v656.tokenId;
  
  const v673 = {
    deadline: v658,
    description: v659,
    owner: v660,
    price: v661,
    title: v662
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v663, v673, v657],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:68:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v675, v676, v677], secs: v679, time: v678, didSend: v44, from: v674 } = txn1;
      
      const v680 = v652[stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0')];
      const v681 = stdlib.Array_set(v680, '0', stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0'));
      const v682 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0'), v681);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v675
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v675, v676, v677], secs: v679, time: v678, didSend: v44, from: v674 } = txn1;
  const v680 = v652[stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0')];
  const v681 = stdlib.Array_set(v680, '0', stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0'));
  const v682 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./auction.rsh:68:16:dot', stdlib.UInt_max, '0'), v681);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v674, v675, v676, v677, v682],
    evt_cnt: 0,
    funcNum: 1,
    lct: v678,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v675]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v686, time: v685, didSend: v51, from: v684 } = txn2;
      
      ;
      const v687 = v682[stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
      const v688 = v687[stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
      const v689 = stdlib.add(v688, stdlib.checkedBigNumberify('./auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v691 = stdlib.Array_set(v687, '0', v689);
      const v692 = stdlib.Array_set(v682, stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0'), v691);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v675
        });
      const v696 = [];
      const v697 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
      const v698 = await txn2.getOutput('internal', 'v697', ctc8, v697);
      const v700 = v698[stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '0')];
      const v701 = v698[stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '1')];
      const v710 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
      const v711 = await txn2.getOutput('internal', 'v710', ctc9, v710);
      const v713 = v711[stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '0')];
      const v714 = v711[stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '1')];
      const v718 = stdlib.add(v700, v713);
      const v720 = v685;
      const v721 = await ctc.getContractInfo();
      const v722 = v676.title;
      const v723 = v676.description;
      const v724 = v676.price;
      const v728 = {
        blockCreated: v685,
        contractInfo: v721,
        description: v723,
        id: v701,
        owner: v674,
        price: v724,
        title: v722,
        tokenId: v675
        };
      const v729 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./auction.rsh:97:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./auction.rsh:97:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
      const v730 = await txn2.getOutput('internal', 'v729', ctc11, v729);
      const v732 = v730[stdlib.checkedBigNumberify('./auction.rsh:97:39:application', stdlib.UInt_max, '0')];
      const v737 = stdlib.add(v718, v732);
      const v741 = v676.deadline;
      const v742 = stdlib.safeAdd(v685, v741);
      const v743 = 'created             ';
      null;
      const v744 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v745 = v744;
      const v746 = v674;
      const v747 = true;
      const v748 = true;
      const v749 = stdlib.checkedBigNumberify('./auction.rsh:107:25:decimal', stdlib.UInt_max, '0');
      const v750 = v685;
      const v756 = v692;
      const v757 = v737;
      
      if (await (async () => {
        const v766 = stdlib.le(v750, v742);
        const v767 = v766 ? v748 : false;
        
        return v767;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1107 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v677,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v696 /* simTokensRecv */, undefined /* simReturnVal */];})();
        const v1108 = await txn3.getOutput('internal', 'v1107', ctc11, v1107);
        const v1110 = v1108[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
        const v1115 = stdlib.add(v757, v1110);
        const v1119 = 'down                ';
        null;
        const v1121 = stdlib.safeAdd(v750, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v1122 = true;
        const v1123 = true;
        const v1124 = v750;
        const v1130 = v756;
        const v1131 = v1115;
        
        if (await (async () => {
          const v1138 = stdlib.le(v1124, v1121);
          const v1139 = v1138 ? v1123 : false;
          
          return v1139;})()) {
          sim_r.isHalt = false;
          }
        else {
          if (v1122) {
            const v1210 = v1130[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v1211 = v1210[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: undefined /* Nothing */
              });
            const v1227 = 'accepted            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v1233 = v1130[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            const v1234 = v1233[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v1250 = 'rejected            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v686, time: v685, didSend: v51, from: v684 } = txn2;
  ;
  const v687 = v682[stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
  const v688 = v687[stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
  const v689 = stdlib.add(v688, stdlib.checkedBigNumberify('./auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v691 = stdlib.Array_set(v687, '0', v689);
  const v692 = stdlib.Array_set(v682, stdlib.checkedBigNumberify('./auction.rsh:70:16:dot', stdlib.UInt_max, '0'), v691);
  ;
  const v693 = stdlib.addressEq(v674, v684);
  stdlib.assert(v693, {
    at: './auction.rsh:70:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v696 = [];
  const v697 = undefined /* Remote */;
  const v698 = await txn2.getOutput('internal', 'v697', ctc8, v697);
  const v700 = v698[stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '0')];
  const v701 = v698[stdlib.checkedBigNumberify('./auction.rsh:81:48:application', stdlib.UInt_max, '1')];
  const v706 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v700);
  stdlib.assert(v706, {
    at: './auction.rsh:81:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v710 = undefined /* Remote */;
  const v711 = await txn2.getOutput('internal', 'v710', ctc9, v710);
  const v713 = v711[stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '0')];
  const v714 = v711[stdlib.checkedBigNumberify('./auction.rsh:82:68:application', stdlib.UInt_max, '1')];
  const v718 = stdlib.add(v700, v713);
  const v719 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v713);
  stdlib.assert(v719, {
    at: './auction.rsh:82:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v720 = v685;
  const v721 = await ctc.getContractInfo();
  const v722 = v676.title;
  const v723 = v676.description;
  const v724 = v676.price;
  const v728 = {
    blockCreated: v685,
    contractInfo: v721,
    description: v723,
    id: v701,
    owner: v674,
    price: v724,
    title: v722,
    tokenId: v675
    };
  const v729 = undefined /* Remote */;
  const v730 = await txn2.getOutput('internal', 'v729', ctc11, v729);
  const v732 = v730[stdlib.checkedBigNumberify('./auction.rsh:97:39:application', stdlib.UInt_max, '0')];
  const v737 = stdlib.add(v718, v732);
  const v738 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v732);
  stdlib.assert(v738, {
    at: './auction.rsh:97:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v741 = v676.deadline;
  const v742 = stdlib.safeAdd(v685, v741);
  const v743 = 'created             ';
  null;
  const v744 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v745 = v744;
  let v746 = v674;
  let v747 = true;
  let v748 = true;
  let v749 = stdlib.checkedBigNumberify('./auction.rsh:107:25:decimal', stdlib.UInt_max, '0');
  let v750 = v685;
  let v756 = v692;
  let v757 = v737;
  
  let txn3 = txn2;
  while (await (async () => {
    const v766 = stdlib.le(v750, v742);
    const v767 = v766 ? v748 : false;
    
    return v767;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn4;
    switch (v807[0]) {
      case 'Auctioneer_stopAuction0_124': {
        const v810 = v807[1];
        undefined /* setApiDetails */;
        ;
        const v824 = 'endSuccess          ';
        null;
        const v825 = {
          blockEnded: v808,
          id: v701,
          lastBid: v749
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v825', ctc15, v825);
        const cv745 = v825;
        const cv746 = v746;
        const cv747 = v747;
        const cv748 = false;
        const cv749 = v749;
        const cv750 = v808;
        const cv756 = v756;
        const cv757 = v757;
        
        v745 = cv745;
        v746 = cv746;
        v747 = cv747;
        v748 = cv748;
        v749 = cv749;
        v750 = cv750;
        v756 = cv756;
        v757 = cv757;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_124': {
        const v907 = v807[1];
        undefined /* setApiDetails */;
        const v913 = v907[stdlib.checkedBigNumberify('./auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
        const v914 = stdlib.gt(v913, v749);
        stdlib.assert(v914, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:121:49:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:121:49:function exp)', 'at ./auction.rsh:104:31:application call to [unknown function] (defined at: ./auction.rsh:104:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v918 = stdlib.add(v757, v913);
        ;
        const v939 = [v746, v749];
        await txn4.getOutput('Bidder_bid', 'v939', ctc16, v939);
        if (v747) {
          const v955 = 'bidSuccess          ';
          null;
          const cv745 = v745;
          const cv746 = v806;
          const cv747 = false;
          const cv748 = v748;
          const cv749 = v913;
          const cv750 = v808;
          const cv756 = v756;
          const cv757 = v918;
          
          v745 = cv745;
          v746 = cv746;
          v747 = cv747;
          v748 = cv748;
          v749 = cv749;
          v750 = cv750;
          v756 = cv756;
          v757 = cv757;
          
          txn3 = txn4;
          continue;}
        else {
          const v952 = stdlib.sub(v918, v749);
          ;
          const v953 = 'bidSuccess          ';
          null;
          const cv745 = v745;
          const cv746 = v806;
          const cv747 = false;
          const cv748 = v748;
          const cv749 = v913;
          const cv750 = v808;
          const cv756 = v756;
          const cv757 = v952;
          
          v745 = cv745;
          v746 = cv746;
          v747 = cv747;
          v748 = cv748;
          v749 = cv749;
          v750 = cv750;
          v756 = cv756;
          v757 = cv757;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_124': {
        const v1004 = v807[1];
        undefined /* setApiDetails */;
        const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
        if (v1056) {
          const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          if (v1062) {
            const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1067 = true;
            await txn4.getOutput('Bidder_optIn', 'v1067', ctc17, v1067);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1066;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}
          else {
            const v1074 = true;
            await txn4.getOutput('Bidder_optIn', 'v1074', ctc17, v1074);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1060;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          if (v1082) {
            const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1087 = true;
            await txn4.getOutput('Bidder_optIn', 'v1087', ctc17, v1087);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1086;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}
          else {
            const v1094 = true;
            await txn4.getOutput('Bidder_optIn', 'v1094', ctc17, v1094);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1015;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1107 = undefined /* Remote */;
  const v1108 = await txn3.getOutput('internal', 'v1107', ctc11, v1107);
  const v1110 = v1108[stdlib.checkedBigNumberify('./auction.rsh:165:37:application', stdlib.UInt_max, '0')];
  const v1115 = stdlib.add(v757, v1110);
  const v1116 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1110);
  stdlib.assert(v1116, {
    at: './auction.rsh:165:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v1119 = 'down                ';
  null;
  const v1121 = stdlib.safeAdd(v750, stdlib.checkedBigNumberify('./auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
  let v1122 = true;
  let v1123 = true;
  let v1124 = v750;
  let v1130 = v756;
  let v1131 = v1115;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1138 = stdlib.le(v1124, v1121);
    const v1139 = v1138 ? v1123 : false;
    
    return v1139;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn5;
    switch (v1163[0]) {
      case 'Auctioneer_acceptSale0_432': {
        const v1166 = v1163[1];
        undefined /* setApiDetails */;
        ;
        const v1173 = true;
        await txn5.getOutput('Auctioneer_acceptSale', 'v1173', ctc17, v1173);
        const cv1122 = true;
        const cv1123 = false;
        const cv1124 = v1164;
        const cv1130 = v1130;
        const cv1131 = v1131;
        
        v1122 = cv1122;
        v1123 = cv1123;
        v1124 = cv1124;
        v1130 = cv1130;
        v1131 = cv1131;
        
        txn4 = txn5;
        continue;
        break;
        }
      case 'Auctioneer_rejectSale0_432': {
        const v1188 = v1163[1];
        undefined /* setApiDetails */;
        ;
        const v1203 = false;
        await txn5.getOutput('Auctioneer_rejectSale', 'v1203', ctc17, v1203);
        const cv1122 = false;
        const cv1123 = false;
        const cv1124 = v1164;
        const cv1130 = v1130;
        const cv1131 = v1131;
        
        v1122 = cv1122;
        v1123 = cv1123;
        v1124 = cv1124;
        v1130 = cv1130;
        v1131 = cv1131;
        
        txn4 = txn5;
        continue;
        break;
        }
      }
    
    }
  if (v1122) {
    const v1210 = v1130[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
    const v1211 = v1210[stdlib.checkedBigNumberify('./auction.rsh:208:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    const v1227 = 'accepted            ';
    null;
    return;
    }
  else {
    const v1233 = v1130[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
    const v1234 = v1233[stdlib.checkedBigNumberify('./auction.rsh:219:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    const v1250 = 'rejected            ';
    null;
    return;
    }
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_acceptSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_rejectSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Auctioneer_stopAuction7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_bid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_optIn7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  appApproval: `ByAQAAEGBKCNBggFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBBwLAhD0mBQEBAQAABWFwcElEGN8aiWtiaWRTdWNjZXNzAAAAAAAAAAAAACI1ADEYQQnOKmRJIls1AUkhBVs1AoEQWzUINhoAF0lBAHciNQQjNQZJIQkMQAA+SSEKDEAAI0khCwxAAA4hCxJEKjX/KTT/UEIDXyEKEkQqNf8oNP9QQgNRIQkSRCo1/4ABAjT/UCEFr1BCAEpJIQwMQAAQIQwSRDYaATX/KDT/UEIAM4Ggi+pMEkQqNf8pNP9QIQWvUEIAHjYaAhc1BDYaAzYaARdJJQxAA6RJIQYMQAL2IQYSRCENNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSklXACA1/yEHWzX+gShbNf1IKjX8gTBbNftXOCA1+oFYWzX5gWBbNfhXaBQ194F8WzX2V4QYNfVXnCA19Fe8ARc181e9ARc18oG+AVs18VfGETXwgdcBWzXvSTUFNe6ABACscs007lCwNO4iVUkjDEAB9kkhDgxAAT0hDhJENO8hDwg17SEPiAiWNO0hCA9BAJ407SEICTXssSKyASEIsggjshA0+rIHszTsIQQPQQBJsSKyASEEsggjshA0/7IHs4AJAAAAAAAABCsBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07CEECUIFOoAJAAAAAAAABDIBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07EIFBDTtIQQPQQBJsSKyASEEsggjshA0/7IHs4AJAAAAAAAABD8BsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07SEECUIEs4AJAAAAAAAABEYBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07UIEfUg07lcBCDXtNO0XSTXsNPENRDTvNOwINes07IgHS4AIAAAAAAAAA6s09DTxFlBQsDT0NPEWUDUHNPNBADEnBDT7FlA07BZQsDT/NP40/TT8NPs0+jT5NPg09zT2NPUxACI08jTsMgY08DTrQgQPsSKyATTxsggjshA09LIHsycENPsWUDTsFlCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TEAIjTyNOwyBjTwNOs08QlCA8tIgBjfGolrZW5kU3VjY2VzcwAAAAAAAAAAAAA0+xZQNPEWULA0+xYyBhZQNPEWUDXtgAgAAAAAAAADOTTtULA07TUHNP80/jT9NPw0+zT6NPk0+DT3NPY07TT0NPMiNPEyBjTwNO9CA2JIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQdbNf5XKBQ1/Vc8IDX8gVxbNfuBZFs1+ldsETX5gX1bNfhJNQU194AErnvUBjT3ULA09yJVQAAmgAkAAAAAAAAElQGwKDUHNP80/jT9NPw0+zT6IyIyBjT5NPhCBBCACQAAAAAAAASzALApNQc0/zT+NP00/DT7NPoiIjIGNPk0+EID6kkjDEACBSMSRLEisgEkshA0CLIYsyM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf5XKJQ1/YG8AVs1/FfEETX7gASai5F0sDT7VwARNfojNP6IBWE0/zEAEkQqNfkrNPwWUAM19zIKeDX2MgpgNPYJFjX1sSKyASSyEDT8shiABG3tvYCyGrMyCmA09gk09RcJFrcAPlcEAFA1+IAIAAAAAAAAArk0+FCwNPhJNfciWzX2NPchBVs19SI09hJEKzT8FlADNfMyCng18jIKYDTyCRY18bEisgEkshA0/LIYgARsreRvshqzMgpgNPIJNPEXCRa3AD5XBABQNfSACAAAAAAAAALGNPRQsDT0STXzIls18iI08hJEMRg18TT9V4AUNfArNPwWUAM17jIKeDXtMgpgNO0JFjXssSKyASSyEDT8shiABLlwy6SyGjT1FjTxFlAyBhZQNP9QNPBQNP1XCFBQNP1XeAhQNP4WULIaszIKYDTtCTTsFwkWtwA+VwQAUDXvgAgAAAAAAAAC2TTvULA070k17iJbNe0iNO0SRIAYmdjgDGNyZWF0ZWQAAAAAAAAAAAAAAAAANPUWUDT/ULA0/zT+NPw0+TT1NPNXCCAyBjTxNPAyBjT9IlsIgRivNP8jIyIyBjT7NPpJIlsjCBZcAFwANPY08gg07QhCALBIgcCaDIgDlLEisgEkshAishiABgcxADIJErIegAEHsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSSJbNf9XCJQ1/oGcAVs1/YAE7SmI4zT/FlA0/lA0/RZQsIERr0k1/ElXABEhBa9cAFwANfshBIgDKLEisgEishIlshAyCrIUNP+yEbMxADT/FlA0/lA0/RZQNPtQKUsBVwB/ZyhLAVd/VmdIIzUBMgY1AkICkzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT9NPcONPsQQQBXNO407xZQNPAWUDTxUDTyFlA081A09BZQNPUWUDT2UDT3FlA0+FA0+VA0+hZRBwhQKFA0/BZQNP5QNP8WUClLAVcAf2coSwFXf2BnSCENNQEyBjUCQgINKzTwFlADNewyCng16zIKYDTrCRY16rEisgEkshA08LIYgASi8NoBsho0+LIaszIKYDTrCTTqFwkWtwA+VwQAUDXtgAgAAAAAAAAEUzTtULA07Uk17CJbNesiNOsSRIAY1sT5+GRvd24AAAAAAAAAAAAAAAAAAAAANPIWUDT8FlA07lA09RZQNPQWULA07jTvNPY0+TT8NP2BMggjIzT9NP40/zTrCEIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT6DjT8EEEANDT1NPYWUDT3UDT4UDT5FlA0+hZQNP5QNP8WUClLAVcAf2coSwFXfwZnSCQ1ATIGNQJCAQ80+0EAb7EisgE0/lcAESJbshIlshA0+LIUNPayEbOxIrIBNP+yCCOyEDT1sgezgBhvKkMsYWNjZXB0ZWQAAAAAAAAAAAAAAAA091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAb7EisgE0/lcAESJbshIlshA09bIUNPayEbOxIrIBNP+yCCOyEDT4sgezgBhvKkMscmVqZWN0ZWQAAAAAAAAAAAAAAAA091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAADEZIQYSRLEisgEkshA0CLIYIQayGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6c0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/auction.rsh:81:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/auction.rsh:82:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/auction.rsh:97:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/auction.rsh:165:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v675",
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
                    "internalType": "bytes20",
                    "name": "_title",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v676",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v677",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v675",
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
                    "internalType": "bytes20",
                    "name": "_title",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v676",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v677",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_acceptSale0_432",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_rejectSale0_432",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1163",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T27",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_stopAuction0_124",
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
                    "internalType": "struct T26",
                    "name": "_Bidder_bid0_124",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_optIn0_124",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T27",
                "name": "v807",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1067",
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
    "name": "_reach_oe_v1074",
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
    "name": "_reach_oe_v1087",
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
    "name": "_reach_oe_v1094",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1107",
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
    "name": "_reach_oe_v1173",
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
    "name": "_reach_oe_v1203",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v697",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v710",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v729",
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
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v825",
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
        "internalType": "struct T28",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v939",
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
        "internalType": "address payable",
        "name": "v2",
        "type": "address"
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
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v5",
        "type": "uint256"
      }
    ],
    "name": "down",
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
        "internalType": "bytes20",
        "name": "v1",
        "type": "bytes20"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "outcome",
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
        "internalType": "struct T13",
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
        "internalType": "struct T28",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bidder_optIn",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_acceptSale0_432",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_rejectSale0_432",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1163",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T27",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctioneer_stopAuction0_124",
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
                    "internalType": "struct T26",
                    "name": "_Bidder_bid0_124",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_optIn0_124",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T27",
                "name": "v807",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200432538038062004325833981016040819052620000269162000516565b600080554360035562000038620002a4565b6040805133815283516020808301919091528085015180516001600160a01b03908116848601528183015180516060808701919091528185015180516080808901919091529581015160a08801528701516001600160801b03191660c087015281870151831660e087015281015161010086015292909201516001600160601b0319166101208401528301511661014082015290517f3ee5a092859fe6a5539248f86e9fdc327bed097de33fb65ad04749518043d5f0918190036101600190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000155929091620001f7565b604082015262000168341560076200027a565b62000172620002eb565b33815260208084018051516001600160a01b0390811683850152815183015160408086019190915291518201511660608401528381015160808401526001600081905543905551620001c79183910162000651565b60405160208183030381529060405260029080519060200190620001ed92919062000354565b5050505062000799565b62000201620003e3565b60005b600181101562000257578481600181106200022357620002236200063b565b60200201518282600181106200023d576200023d6200063b565b6020020152806200024e8162000732565b91505062000204565b50818184600181106200026e576200026e6200063b565b60200201529392505050565b81620002a05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620002d7620003e3565b8152602001620002e6620003e3565b905290565b6040805160a08082018352600080835260208084018290528451928301855281835284516060808201875283825281830184905281870184905291840152828501829052820181905260808201529091820190815260006020820152604001620002e6620003e3565b82805462000362906200075c565b90600052602060002090601f016020900481019282620003865760008555620003d1565b82601f10620003a157805160ff1916838001178555620003d1565b82800160010185558215620003d1579182015b82811115620003d1578251825591602001919060010190620003b4565b50620003df92915062000430565b5090565b60405180602001604052806001905b62000419604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003f25790505090565b5b80821115620003df576000815560010162000431565b604080519081016001600160401b03811182821017156200047857634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200047857634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200047857634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004f857600080fd5b919050565b80516001600160601b031981168114620004f857600080fd5b60008183036101408112156200052b57600080fd5b6200053562000447565b8351815261012080601f19840112156200054e57600080fd5b620005586200047e565b6200056660208701620004e0565b815260e0603f19850112156200057b57600080fd5b62000585620004af565b604087015181526060605f19860112156200059f57600080fd5b620005a96200047e565b606088015181526080880151602082015260a08801519095506001600160801b031981168114620005d957600080fd5b604086015260208101859052620005f360c08801620004e0565b604082015260e08701516060820152620006116101008801620004fd565b6080820152602082015262000628868301620004e0565b6040820152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015182168184015260408085015180518286015280830151805160608088019190915281850151608080890191909152918401516001600160801b03191660a088015282840151861660c088015282015160e08701528101516001600160601b0319166101008601526101a085019392919050606083818801511661012087015260808701519350610140860160005b6001811015620007265785518051835285810151868401528401511515848301529484019490820190600101620006f4565b50505050505092915050565b60006000198214156200075557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200077157607f821691505b602082108114156200079357634e487b7160e01b600052602260045260246000fd5b50919050565b613b7c80620007a96000396000f3fe60806040526004361061009a5760003560e01c80636f49e231116100615780636f49e2311461011a5780638323075714610122578063ab53f2c614610137578063b62792241461015a578063b71074c714610191578063d2526fd9146101a457005b80631e93b0f1146100a35780632c10a159146100c75780632d2ae6eb146100da57806336054e53146100ef5780634a96cc0b1461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004612f33565b6101ac565b6100e26101d0565b6040516100be9190612f4b565b6100a16100fd366004612f6c565b610201565b61010a610221565b60405190151581526020016100be565b61010a61022b565b34801561012e57600080fd5b506001546100b4565b34801561014357600080fd5b5061014c610235565b6040516100be929190612faa565b61016d610168366004612fe4565b6102d2565b6040805182516001600160a01b0316815260209283015192810192909252016100be565b6100a161019f366004612ffd565b6102f5565b61010a610315565b6101b4612876565b6101cc6101c63684900384018461310c565b8261031f565b5050565b6101f460405180606001604052806000815260200160008152602001600081525090565b6101fc610bf4565b905090565b610209612876565b6101cc61021b36849003840184613162565b82610c46565b60006101fc610f72565b60006101fc610fa2565b60006060600054600280805461024a906131f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610276906131f0565b80156102c35780601f10610298576101008083540402835291602001916102c3565b820191906000526020600020905b8154815290600101906020018083116102a657829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102ef82610fd2565b92915050565b6102fd612876565b6101cc61030f36849003840184613225565b8261101f565b60006101fc611d81565b61032f6001600054146014611dae565b815161034a90158061034357508251600154145b6015611dae565b60008080556002805461035c906131f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610388906131f0565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b50505050508060200190518101906103ed91906133a7565b90506103f76128e3565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133856040516104289291906134bc565b60405180910390a161043c34156008611dae565b61045661044f3384602001516001611dd4565b6009611dae565b815161046e906001600160a01b03163314600a611dae565b61048261047f836020015130611dec565b90565b6101808201524761016082015260408051600481526024810182526020810180516001600160e01b0316632cfbfba760e01b17905260608401519151909160009182916001600160a01b03169082906104dc9086906134e5565b60006040518083038185875af1925050503d8060008114610519576040519150601f19603f3d011682016040523d82523d6000602084013e61051e565b606091505b509150915061052f8282600c611eb8565b5061054c610541866020015130611dec565b856101800151900390565b6101a085018190526105609015600b611dae565b6101608401514703602080860151919091528151610585919083018101908301613501565b602085810180518201929092529051604080870182905280518251815291830151928201929092527f17f07aa4b6c5235bdee1dad1a74d71b991c43e424791a09cfd5f279e87ad1c2294500191506105da9050565b60405180910390a16040810151516105f49015600d611dae565b61060561047f836020015130611dec565b6101e0820152476101c082015260408051600481526024810182526020810180516001600160e01b0316637541dda360e11b17905260608401519151909160009182916001600160a01b031690829061065f9086906134e5565b60006040518083038185875af1925050503d806000811461069c576040519150601f19603f3d011682016040523d82523d6000602084013e6106a1565b606091505b50915091506106b28282600f611eb8565b506106cf6106c4866020015130611dec565b856101e00151900390565b61020085018190526106e39015600e611dae565b6101c084015147036060850151528051610706908201602090810190830161351a565b6060850180516001600160a01b03928316602091820152905160808701819052604080518251815291830151909316918101919091527fac409bd3cde17befab0e71f00cafd21b2d9000ae74c75817aa165e490e5d3e0794500191506107699050565b60405180910390a160808101515161078390156010611dae565b3060a080830182815260408085015160209081015160c0808801805192909252935181516001600160a01b03918216908401528151439085015288518251908216606091820152938901805160809081015184516001600160601b03199091169101528051840151835190970196909652945190920151825190930192909252908501805191519190921660e090910152516108239161047f9190611dec565b6102408201524761022082015260c08082015160408051825160248201526020838101516001600160a01b0390811660448401528385015160648401526060808601518216608485015260808601516001600160601b03191660a485015260a0860151805160c48601528084015160e48601528501516fffffffffffffffffffffffffffffffff19166101048501529585015161012484015260e090940151841661014480840191909152835180840390910181526101649092018352810180516001600160e01b031663063eabe760e11b1790529285015190516000928392169082906109129086906134e5565b60006040518083038185875af1925050503d806000811461094f576040519150601f19603f3d011682016040523d82523d6000602084013e610954565b606091505b509150915061096582826012611eb8565b50610982610977866020015130611dec565b856102400151900390565b610260850181905261099690156011611dae565b610220840151470360e085018051919091525161010085018190526040517e6c26012afbb3c33a9eda566e30bd79fff644e3e9cba355f1dd15094c3acabb94506109e39350909150613535565b60405180910390a1610100810151516109fe90156013611dae565b6618dc99585d195960ca1b610120820181905260408083015160209081015185518351948552918401526001600160a01b031682820152517f559c3ec702008d1ed78655027921d3b393ce36ca96582df6df0c2796cf7148de9181900360600190a1610140810180516000908190528151602001819052905160400152610a83612abe565b825181516001600160a01b0391821690526020808501518351908316908201526060808601518451908416604091820152855185519015159201919091528481015182015184516080908101919091528086015190920151845190841660a09182015284514360c0909101819052908601518551941660e090940193909352850180519091015183516001600160601b0319909116610100909101525151610b2b9190611ef3565b815161012001526101408201516020808301805192909252845182516001600160a01b03909116908201528151600160409182018190528351606090810182905284516000608091820181905295514360a090910152880180518451928301855281515151909301825280515185015194820194909452925151820151151591830191909152610bbc929091611f40565b602082015160c0015260408201515160808301515161010084015151910101602082015160e00152610bed81611fb4565b5050505050565b610c1860405180606001604052806000815260200160008152602001600081525090565b610c20612b29565b60208101515160009052610c32612876565b610c3c828261101f565b6040015192915050565b610c56600660005414601b611dae565b8151610c71901580610c6a57508251600154145b601c611dae565b600080805560028054610c83906131f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610caf906131f0565b8015610cfc5780601f10610cd157610100808354040283529160200191610cfc565b820191906000526020600020905b815481529060010190602001808311610cdf57829003601f168201915b5050505050806020019051810190610d14919061357a565b90507f4208286ebb06b5ded256694c66572f0ecc8422f937c57e9c5c3c3930244f3db83384604051610d4792919061362b565b60405180910390a16000602084015151516001811115610d6957610d69613564565b1415610e5f57610d7b34156019611dae565b604051600181527f8361bf4e7e0629f6e73204ce69898313119fc14269ddea751c42e451d887bb6f9060200160405180910390a160018252610dbb612b43565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184516001600160601b0319909116908201526060808601518551941693810193909352608080860151855182015260a0808701518651909101528285018051600190528051600094019390935282514392019190915260c085015182519093019290925260e0840151905190910152610e598161242c565b50505050565b6001602084015151516001811115610e7957610e79613564565b1415610f6d57610e8b3415601a611dae565b604051600081527fd721daa9930fa177805dd4d5cd9440a58640e0d2ebc4146b78f18b8ec4a6ae9e9060200160405180910390a160006020830152610ece612b43565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184516001600160601b0319909116908201526060808601518551941693810193909352608080860151855182015260a080870151865190910152828501805160009081905281519094019390935282514392019190915260c085015182519093019290925260e0840151905190910152610e598161242c565b505050565b6000610f7c612b29565b60208101515160029052610f8e612876565b610f98828261101f565b6080015192915050565b6000610fac612b89565b60208101515160019052610fbe612876565b610fc88282610c46565b6020015192915050565b6040805180820190915260008082526020820152610fee612b29565b602081018051516001905251516040015183905261100a612876565b611014828261101f565b606001519392505050565b61102f6007600054146021611dae565b815161104a90158061104357508251600154145b6022611dae565b60008080556002805461105c906131f0565b80601f0160208091040260200160405190810160405280929190818152602001828054611088906131f0565b80156110d55780601f106110aa576101008083540402835291602001916110d5565b820191906000526020600020905b8154815290600101906020018083116110b857829003601f168201915b50505050508060200190518101906110ed91906136bf565b90506110f7612bc2565b7f6179912905fa6c9754232355328757e56e6e30961b722d4da4fe9b84e726a93333856040516111289291906137ed565b60405180910390a1600060208501515151600281111561114a5761114a613564565b141561132c5761115c3415601d611dae565b69656e645375636365737360b01b80825260808301516101c08401516040517facf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21936111aa9390929091613852565b60405180910390a1608082015160208083018051929092528151439101526101c08301518151604090810191909152905190517f1ae8cccf4555a515db54b02adfff0908c9feafcac09cf393207d2e13bb08da119161120891612f4b565b60405180910390a160208101516040840152611222612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b0151895190891690820152610100808c01518a516001600160601b0319909116910152610120808c01518a519091015289870151878a018051919091526101608c01518151991698909701979097526101808a01518651901515950194909452845160009301929092526101c08801518451909101528251439101526101e086015182519091015261020085015190519091015261132681611fb4565b50610e59565b600160208501515151600281111561134657611346613564565b141561172c576020840151516040908101519082018190526101c083015190516113729110601e611dae565b61020082015160408201518051909101606083015251611395903414601f611dae565b6101608201516080820180516001600160a01b039092169091526101c0830151815160200152516040517f29c3866970af068b3e49e1be46a3ff55b3075169b8ccf8b41b0fcc784b2fa350916114059181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a1608081015160608401526101808201511561158157696269645375636365737360b01b60c0820181905260808301516040808401515190517facf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21936114749390929091613852565b60405180910390a1611484612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b01518951981697810197909752610100808b015189516001600160601b0319909116910152610120808b01518951909101526101408a015186890180519190915280513397019690965285516000908601526101a08a015186519015159085015293880151518551909201919091528351439101526101e087015183519092019190915284015190519091015261132681611fb4565b8161016001516001600160a01b03166108fc836101c001519081150290604051600060405180830381858888f193505050501580156115c4573d6000803e3d6000fd5b50696269645375636365737360b01b60a0820181905260808301516040808401515190517facf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21936116179390929091613852565b60405180910390a1611627612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b015189519816970196909652610100808a015188516001600160601b0319909116910152610120808a015188519091015261014089015185880180519190915280513396019590955284516000908501526101a089015185519015159084015292870151518451909101528251439201919091526101e08601519151909201528201516101c084015190035b602082015160e0015261132681611fb4565b600260208501515151600281111561174657611746613564565b1415610e5957610200820151620f42400160e082015261176c34620f4240146020611dae565b620dbba08160e0015110611aa65760e0810151620dbb9f190161010082015260a08201516040516001600160a01b0390911690600090620dbba09082818181858883f193505050501580156117c5573d6000803e3d6000fd5b50620186a0816101000151106119545781516040516001600160a01b0390911690600090620186a09082818181858883f1935050505015801561180c573d6000803e3d6000fd5b50604051600181527f6b377c1bfba0a663a008460ba46a836d8cc627428257c8f9ea36546bdc1450bb9060200160405180910390a160016080840152611850612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b01518951908916910152610100808b015189516001600160601b031990911690820152610120808c01518a51909101526101408b0151878a018051919091526101608c01518151991698909701979097526101808a015186519015159501949094526101a089015185519015159301929092526101c08801518451909101528251439101526101e0860151915101528201516201869f190161171a565b604051600181527fa16e02d7bbbcabc8453e40343384df419e54c5a83f94485b90d2b96eba60a73d9060200160405180910390a160016080840152611997612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b0151895190891690820152610100808c01518a516001600160601b031990911690820152610120808d01518b51909101526101408c0151888b018051919091526101608d015181519a1699909801989098526101808b015187519015159601959095526101a08a015186519015159401939093526101c08901518551909201919091528351439101526101e08701518351909101529184015190519091015261132681611fb4565b620186a08160e0015110611c335781516040516001600160a01b0390911690600090620186a09082818181858883f19350505050158015611aeb573d6000803e3d6000fd5b50604051600181527f077cdc57e013a005ebf606427b479e48411eb96c1d763ce6ee76a1461415d38d9060200160405180910390a160016080840152611b2f612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b0151895190891690820152610100808c01518a516001600160601b0319909116910152610120808c01518a51909101526101408b0151878a018051919091526101608c01518151991698909701979097526101808a015186519015159501949094526101a089015185519015159301929092526101c08801518451909101528251439101526101e0860151915101528201516201869f190161171a565b604051600181527ff910c4baf35cc7aff398eef490c107e2a3db0dbd3b5fc087d3bf4ee4db32caa49060200160405180910390a160016080840152611c76612abe565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855190151590820152608080880151865182015260a08089015187519087169082015260c0808a0151885182015260e0808b0151895190891690820152610100808c01518a516001600160601b0319909116910152610120808c01518a51909101526101408b0151878a018051919091526101608c01518151991698909701979097526101808a015186519015159501949094526101a089015185519015159301929092526101c08801518451909101528251439101526101e08601518251909101528382015190519091015261132681611fb4565b6000611d8b612b89565b60208101515160009052611d9d612876565b611da78282610c46565b5192915050565b816101cc5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611de2838530856126b7565b90505b9392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716918391611e47916134e5565b60006040518083038185875af1925050503d8060008114611e84576040519150601f19603f3d011682016040523d82523d6000602084013e611e89565b606091505b5091509150611e9a82826006611eb8565b5080806020019051810190611eaf9190613501565b95945050505050565b60608315611ec7575081611de5565b825115611ed75782518084602001fd5b60405163100960cb60e01b815260048101839052602401611dcb565b600082611f00838261388a565b91508110156102ef5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611dcb565b611f48612c66565b60005b6001811015611f9457848160018110611f6657611f6661354e565b6020020151828260018110611f7d57611f7d61354e565b602002015280611f8c816138a2565b915050611f4b565b5081818460018110611fa857611fa861354e565b60200201529392505050565b6040805161010081018252600060c0820181815260e083018290528252825180840184528181526020808201839052830152918101829052606081018290526080810182905260a081019190915281516101200151602083015160a00151111561201f576000612029565b8160200151606001515b1561215857612036612cb1565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518316818501528551606090810151151590850152855160809081015181860152865160a090810151851690860152865160c09081015181870152875160e0908101518616818801528851610100908101516001600160601b031916908801528851610120908101519088015284890180515161014089015280518601519096166101608801528551840151151561018088015260016101a088018190528651909301516101c08801528551909101516101e08701529351909301516102008501526007600055439092559051612134918391016138fb565b60405160208183030381529060405260029080519060200190610e59929190612d54565b61216d61047f83600001516020015130611dec565b6080820152476060820152602082015151604051600091634c344d9d60e01b9161219a9190602401612f4b565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460000151604001516001600160a01b03166000846040516121f491906134e5565b60006040518083038185875af1925050503d8060008114612231576040519150601f19603f3d011682016040523d82523d6000602084013e612236565b606091505b509150915061224782826017611eb8565b5061226761225d86600001516020015130611dec565b8560800151900390565b60a0850181905261227a90156016611dae565b6060840151470384515250508151602083018190526040517f7ca0ad8377b6e39ed33f5f8e45cb35677029307d9676c28bfef34fd26f77f16092506122bf9190613535565b60405180910390a16020810151516122d990156018611dae565b633237bbb760e11b60408281018290528351608080820151602080880151830151845160e086015160c0968701518851998a5293890194909452958701526001600160a01b03948516606087015293169084015260a08301919091527f357c94579deebb86dae97569dd270d5562f0a208d6b4874cfcc80bb87d54176d910160405180910390a1612368612b43565b82515181516001600160a01b03918216905283516020908101518351908316908201528451610100015183516001600160601b03199091166040909101528085018051909101518351921660609092019190915280516080908101518351909101525160a001516123da906032611ef3565b815160a090810191909152602080830180516001908190528151830152858201805190930151815160400152825160c00151905160600152905160e00151908301515101602082015160800152610f6d815b6040805180820190915260008082526020820152815160a00151602083015160400151111561245c576000612466565b8160200151602001515b156124fe57612473612dd8565b8251516001600160a01b039081168252835160209081015182168184015284516040908101516001600160601b03191681850152855160609081015190931683850152855160809081015181860152865160a0908101519086015282870180519094015160c086015292519092015160e0840152600660005543600155905161213491839101613a69565b602082015151156125ee578151602080820151606092830151918501519092015161253392919060005b602002015151612791565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612575573d6000803e3d6000fd5b50671858d8d95c1d195960c21b808252825160408082015160808301518351606085015160209095015193517f543cb95dd81154d567510afb182f8995b596950b4795b12737cf59283102e666966125d09690959091613ae4565b60405180910390a1600080805560018190556101cc90600290612e17565b81516020808201519151908401516060015161260d9291906000612528565b8151606001516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612652573d6000803e3d6000fd5b50671c995a9958dd195960c21b60208083018290528351604080820151608083015183516060850151949095015192517f543cb95dd81154d567510afb182f8995b596950b4795b12737cf59283102e666966125d09690959394929390929091613ae4565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161271e916134e5565b60006040518083038185875af1925050503d806000811461275b576040519150601f19603f3d011682016040523d82523d6000602084013e612760565b606091505b509150915061277182826001611eb8565b50808060200190518101906127869190613b29565b979650505050505050565b61279c8383836127a5565b610f6d57600080fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612804916134e5565b60006040518083038185875af1925050503d8060008114612841576040519150601f19603f3d011682016040523d82523d6000602084013e612846565b606091505b509150915061285782826002611eb8565b508080602001905181019061286c9190613b29565b9695505050505050565b6040518060a001604052806000151581526020016000151581526020016128b760405180606001604052806000815260200160008152602001600081525090565b81526020016128d6604080518082019091526000808252602082015290565b8152600060209091015290565b604051806102800160405280600015158152602001612915604051806040016040528060008152602001600081525090565b8152602001612937604051806040016040528060008152602001600081525090565b815260200161296260405180604001604052806000815260200160006001600160a01b031681525090565b815260200161298d60405180604001604052806000815260200160006001600160a01b031681525090565b8152600060208201526040016129f760408051610100810182526000808252602080830182905282840182905260608084018390526080840183905284519081018552828152908101829052928301529060a0820190815260006020820181905260409091015290565b8152602001612a1b6040518060400160405280600081526020016000151581525090565b8152602001612a3f6040518060400160405280600081526020016000151581525090565b815260200160006001600160601b0319168152602001612a7960405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082018390526101208201839052610140820183905261016082019290925290815260208101612b24612e54565b905290565b604051806040016040528060008152602001612b24612eb4565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101612b24612ec7565b604051806040016040528060008152602001612b2460408051608081018252600060208201818152928201819052606082015290815290565b60405180610120016040528060006001600160601b0319168152602001612c0360405180606001604052806000815260200160008152602001600081525090565b8152602001612c1e6040518060200160405280600081525090565b815260200160008152602001612c44604080518082019091526000808252602082015290565b8152600060208201819052604082018190526060820181905260809091015290565b60405180602001604052806001905b612c9b604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612c755790505090565b60408051610220810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e084018390526101008401839052610120840183905284519081018552828152908101829052928301529061014082019081526000602082018190526040820181905260608201819052608082015260a001612d47612c66565b8152602001600081525090565b828054612d60906131f0565b90600052602060002090601f016020900481019282612d825760008555612dc8565b82601f10612d9b57805160ff1916838001178555612dc8565b82800160010185558215612dc8579182015b82811115612dc8578251825591602001919060010190612dad565b50612dd4929150612ef3565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101612d47612c66565b508054612e23906131f0565b6000825580601f10612e33575050565b601f016020900490600052602060002090810190612e519190612ef3565b50565b604051806101000160405280612e8460405180606001604052806000815260200160008152602001600081525090565b815260006020820181905260408201819052606082018190526080820181905260a082015260c001612d47612c66565b6040518060200160405280612b24612f08565b6040518060a0016040528060001515815260200160001515815260200160008152602001612d47612c66565b5b80821115612dd45760008155600101612ef4565b60408051608081018252600080825260208083018290528351908101845290815290918201906128d6565b600060408284031215612f4557600080fd5b50919050565b815181526020808301519082015260408083015190820152606081016102ef565b600060808284031215612f4557600080fd5b60005b83811015612f99578181015183820152602001612f81565b83811115610e595750506000910152565b8281526040602082015260008251806040840152612fcf816060850160208701612f7e565b601f01601f1916919091016060019392505050565b600060208284031215612ff657600080fd5b5035919050565b600060a08284031215612f4557600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156130485761304861300f565b60405290565b6040516020810167ffffffffffffffff811182821017156130485761304861300f565b6040516060810167ffffffffffffffff811182821017156130485761304861300f565b6040516080810167ffffffffffffffff811182821017156130485761304861300f565b60405160a0810167ffffffffffffffff811182821017156130485761304861300f565b604051610220810167ffffffffffffffff811182821017156130485761304861300f565b8015158114612e5157600080fd5b60006040828403121561311e57600080fd5b6040516040810181811067ffffffffffffffff821117156131415761314161300f565b604052823581526020830135613156816130fe565b60208201529392505050565b6000818303608081121561317557600080fd5b61317d613025565b833581526060601f198301121561319357600080fd5b61319b61304e565b91506131a5613071565b6020850135600281106131b757600080fd5b815260408501356131c7816130fe565b602082015260608501356131da816130fe565b6040820152825260208101919091529392505050565b600181811c9082168061320457607f821691505b60208210811415612f4557634e487b7160e01b600052602260045260246000fd5b600081830360a081121561323857600080fd5b613240613025565b833581526080601f198301121561325657600080fd5b61325e61304e565b613266613094565b60208601356003811061327857600080fd5b81526040860135613288816130fe565b806020830152506020605f19850112156132a157600080fd5b6132a961304e565b606087013581526040820152608086013593506132c5846130fe565b606081019390935291825260208101919091529392505050565b80516001600160a01b03811681146132f657600080fd5b919050565b80516001600160601b0319811681146132f657600080fd5b80516132f6816130fe565b600082601f83011261332f57600080fd5b61333761304e565b8060608085018681111561334a57600080fd5b855b8181101561339b578281890312156133645760008081fd5b61336c613071565b8151815260208083015181830152604080840151613389816130fe565b9083015290865290940193820161334c565b50919695505050505050565b60008183036101a08112156133bb57600080fd5b6133c36130b7565b6133cc846132df565b81526133da602085016132df565b602082015260e0603f19830112156133f157600080fd5b6133f96130b7565b604085015181526060605f198401121561341257600080fd5b61341a613071565b9250606085015183526080850151602084015260a08501516fffffffffffffffffffffffffffffffff198116811461345157600080fd5b60408401526020810183905261346960c086016132df565b604082015260e0850151606082015261348561010086016132fb565b6080820152604082015261349c61012085016132df565b60608201526134af85610140860161331e565b6080820152949350505050565b6001600160a01b038316815260608101611de56020830184805182526020908101511515910152565b600082516134f7818460208701612f7e565b9190910192915050565b60006020828403121561351357600080fd5b5051919050565b60006020828403121561352c57600080fd5b611de5826132df565b81518152602080830151151590820152604081016102ef565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6000610140828403121561358d57600080fd5b604051610100810181811067ffffffffffffffff821117156135b1576135b161300f565b6040526135bd836132df565b81526135cb602084016132df565b60208201526135dc604084016132fb565b60408201526135ed606084016132df565b60608201526080830151608082015260a083015160a08201526136138460c0850161331e565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061365e5761365e613564565b80604085015250602081015115156060840152604081015115156080840152509392505050565b60006060828403121561369757600080fd5b61369f613071565b905081518152602082015160208201526040820151604082015292915050565b60006102a082840312156136d257600080fd5b6136da6130da565b6136e3836132df565b81526136f1602084016132df565b6020820152613702604084016132df565b604082015261371360608401613313565b60608201526080830151608082015261372e60a084016132df565b60a082015260c083015160c082015261374960e084016132df565b60e082015261010061375c8185016132fb565b90820152610120838101519082015261014061377a85828601613685565b908201526101a061378c8482016132df565b6101608301526101c06137a0818601613313565b6101808401526101e06137b4818701613313565b83850152610200925082860151828501526137d387610220880161331e565b908401525061028093909301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160c0830191906003811061382057613820613564565b8060408501525060208101511515606084015260408101515160808401526060810151151560a0840152509392505050565b6001600160601b03199390931683526020830191909152604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561389d5761389d613874565b500190565b60006000198214156138b6576138b6613874565b5060010190565b8060005b6001811015610e595781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016138c1565b81516001600160a01b031681526102a08101602083015161392760208401826001600160a01b03169052565b50604083015161394260408401826001600160a01b03169052565b506060830151613956606084018215159052565b506080830151608083015260a083015161397b60a08401826001600160a01b03169052565b5060c083015160c083015260e08301516139a060e08401826001600160a01b03169052565b50610100838101516001600160601b031981168483015250506101208381015190830152610140808401518051828501526020810151610160850152604081015161018085015250506101608301516101a0613a06818501836001600160a01b03169052565b61018085015191506101c0613a1e8186018415159052565b9085015191506101e090613a358583018415159052565b85015161020085810191909152818601519250613a566102208601846138bd565b8086015161028086015250505092915050565b60006101408201905060018060a01b038084511683528060208501511660208401526001600160601b03196040850151166040840152806060850151166060840152506080830151608083015260a083015160a083015260c0830151613ad260c08401826138bd565b5060e083015161012083015292915050565b6001600160601b0319968716815294909516602085015260408401929092526001600160a01b039081166060840152908116608083015290911660a082015260c00190565b600060208284031215613b3b57600080fd5b8151611de5816130fe56fea2646970667358221220318d52287fbc19da3de406385743884c47a4f54b9067e2a9811064468beccaa264736f6c634300080c0033`,
  BytecodeLen: 17189,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './auction.rsh:69:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './auction.rsh:230:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './auction.rsh:230:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './auction.rsh:180:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './auction.rsh:104:31:after expr stmt semicolon',
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
  "Bidder_optIn": Bidder_optIn,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
