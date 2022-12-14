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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc6, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc7, ctc7, ctc2, ctc2]
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
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_83: ctc4,
    Bidder_stopAuction0_83: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v408, v409, v427, v435, v436, v437, v438, v439, v440, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc3, ctc3, ctc2, ctc2]);
  const v476 = stdlib.protect(ctc4, await interact.in(), {
    at: './test_auction.rsh:1:23:application',
    fs: ['at ./test_auction.rsh:79:41:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to "runBidder_bid0_83" (defined at: ./test_auction.rsh:79:22:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v477 = v476[stdlib.checkedBigNumberify('./test_auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v479 = stdlib.gt(v477, v440);
  stdlib.assert(v479, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test_auction.rsh:80:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test_auction.rsh:79:41:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to "runBidder_bid0_83" (defined at: ./test_auction.rsh:79:22:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v486 = ['Bidder_bid0_83', v476];
  
  const txn1 = await (ctc.sendrecv({
    args: [v408, v409, v427, v435, v436, v437, v438, v439, v440, v441, v486],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v477, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v494], secs: v496, time: v495, didSend: v253, from: v493 } = txn1;
      
      switch (v494[0]) {
        case 'Bidder_bid0_83': {
          const v497 = v494[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v502 = v497[stdlib.checkedBigNumberify('./test_auction.rsh:79:22:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v502,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v513 = [v437, v440];
          const v514 = await txn1.getOutput('Bidder_bid', 'v513', ctc7, v513);
          
          if (v438) {
            const v536 = 'bidSuccess          ';
            null;
            const v1129 = v493;
            const v1130 = false;
            const v1131 = v439;
            const v1132 = v502;
            const v1133 = v495;
            const v1135 = stdlib.gt(v435, v441);
            const v1136 = v1135 ? v439 : false;
            if (v1136) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v493,
                tok: v409
                });
              const v1137 = 'sold                ';
              null;
              sim_r.txns.push({
                kind: 'from',
                to: v436,
                tok: undefined /* Nothing */
                });
              const v1138 = 'notSold             ';
              const v1139 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v409
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v437,
              tok: undefined /* Nothing */
              });
            const v529 = 'bidSuccess          ';
            null;
            const v1140 = v493;
            const v1141 = false;
            const v1142 = v439;
            const v1143 = v502;
            const v1144 = v495;
            const v1146 = stdlib.gt(v435, v441);
            const v1147 = v1146 ? v439 : false;
            if (v1147) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v493,
                tok: v409
                });
              const v1148 = 'sold                ';
              null;
              sim_r.txns.push({
                kind: 'from',
                to: v436,
                tok: undefined /* Nothing */
                });
              const v1149 = 'notSold             ';
              const v1150 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v409
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_stopAuction0_83': {
          const v559 = v494[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc3, ctc3, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v494], secs: v496, time: v495, didSend: v253, from: v493 } = txn1;
  switch (v494[0]) {
    case 'Bidder_bid0_83': {
      const v497 = v494[1];
      undefined /* setApiDetails */;
      const v502 = v497[stdlib.checkedBigNumberify('./test_auction.rsh:79:22:spread', stdlib.UInt_max, '0')];
      const v503 = stdlib.gt(v502, v440);
      stdlib.assert(v503, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test_auction.rsh:80:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test_auction.rsh:79:41:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      ;
      const v513 = [v437, v440];
      const v514 = await txn1.getOutput('Bidder_bid', 'v513', ctc7, v513);
      if (v253) {
        stdlib.protect(ctc8, await interact.out(v497, v514), {
          at: './test_auction.rsh:79:23:application',
          fs: ['at ./test_auction.rsh:79:23:application call to [unknown function] (defined at: ./test_auction.rsh:79:23:function exp)', 'at ./test_auction.rsh:84:47:application call to "notify" (defined at: ./test_auction.rsh:83:42:function exp)', 'at ./test_auction.rsh:83:42:application call to [unknown function] (defined at: ./test_auction.rsh:83:42:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v438) {
        const v536 = 'bidSuccess          ';
        null;
        const v1129 = v493;
        const v1130 = false;
        const v1131 = v439;
        const v1132 = v502;
        const v1133 = v495;
        const v1135 = stdlib.gt(v435, v441);
        const v1136 = v1135 ? v439 : false;
        if (v1136) {
          return;
          }
        else {
          ;
          const v1137 = 'sold                ';
          null;
          ;
          const v1138 = 'notSold             ';
          const v1139 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
          null;
          return;
          }}
      else {
        ;
        const v529 = 'bidSuccess          ';
        null;
        const v1140 = v493;
        const v1141 = false;
        const v1142 = v439;
        const v1143 = v502;
        const v1144 = v495;
        const v1146 = stdlib.gt(v435, v441);
        const v1147 = v1146 ? v439 : false;
        if (v1147) {
          return;
          }
        else {
          ;
          const v1148 = 'sold                ';
          null;
          ;
          const v1149 = 'notSold             ';
          const v1150 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
          null;
          return;
          }}
      break;
      }
    case 'Bidder_stopAuction0_83': {
      const v559 = v494[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_stopAuction5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_stopAuction5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_stopAuction5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_83: ctc5,
    Bidder_stopAuction0_83: ctc4
    });
  const ctc7 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v408, v409, v427, v435, v436, v437, v438, v439, v440, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc3, ctc3, ctc2, ctc2]);
  const v463 = ctc.selfAddress();
  const v465 = stdlib.protect(ctc4, await interact.in(), {
    at: './test_auction.rsh:1:23:application',
    fs: ['at ./test_auction.rsh:100:28:application call to [unknown function] (defined at: ./test_auction.rsh:100:28:function exp)', 'at ./test_auction.rsh:70:83:application call to "runBidder_stopAuction0_83" (defined at: ./test_auction.rsh:98:21:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
    msg: 'in',
    who: 'Bidder_stopAuction'
    });
  const v468 = stdlib.addressEq(v463, v436);
  stdlib.assert(v468, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test_auction.rsh:101:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test_auction.rsh:100:28:application call to [unknown function] (defined at: ./test_auction.rsh:100:28:function exp)', 'at ./test_auction.rsh:100:28:application call to [unknown function] (defined at: ./test_auction.rsh:100:28:function exp)', 'at ./test_auction.rsh:70:83:application call to "runBidder_stopAuction0_83" (defined at: ./test_auction.rsh:98:21:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
    msg: 'You are not the Seller',
    who: 'Bidder_stopAuction'
    });
  const v472 = ['Bidder_stopAuction0_83', v465];
  
  const txn1 = await (ctc.sendrecv({
    args: [v408, v409, v427, v435, v436, v437, v438, v439, v440, v441, v472],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./test_auction.rsh:103:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v494], secs: v496, time: v495, didSend: v253, from: v493 } = txn1;
      
      switch (v494[0]) {
        case 'Bidder_bid0_83': {
          const v497 = v494[1];
          
          break;
          }
        case 'Bidder_stopAuction0_83': {
          const v559 = v494[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_stopAuction"
            });
          ;
          const v605 = 'endSuccess          ';
          null;
          const v609 = 'down                ';
          const v610 = stdlib.checkedBigNumberify('./test_auction.rsh:111:80:decimal', stdlib.UInt_max, '1');
          null;
          const v611 = {
            blockEnded: v495,
            id: v427,
            lastBid: v440
            };
          const v612 = await txn1.getOutput('Bidder_stopAuction', 'v611', ctc7, v611);
          
          const v1184 = v437;
          const v1185 = v438;
          const v1186 = false;
          const v1187 = v440;
          const v1188 = v495;
          const v1190 = stdlib.gt(v435, v441);
          const v1191 = v1190 ? false : false;
          if (v1191) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v437,
              tok: v409
              });
            const v1192 = 'sold                ';
            null;
            if (v438) {
              sim_r.txns.push({
                kind: 'halt',
                tok: v409
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v436,
                tok: undefined /* Nothing */
                });
              const v1193 = 'notSold             ';
              const v1194 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v409
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc3, ctc3, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v494], secs: v496, time: v495, didSend: v253, from: v493 } = txn1;
  switch (v494[0]) {
    case 'Bidder_bid0_83': {
      const v497 = v494[1];
      return;
      break;
      }
    case 'Bidder_stopAuction0_83': {
      const v559 = v494[1];
      undefined /* setApiDetails */;
      ;
      const v605 = 'endSuccess          ';
      null;
      const v609 = 'down                ';
      const v610 = stdlib.checkedBigNumberify('./test_auction.rsh:111:80:decimal', stdlib.UInt_max, '1');
      null;
      const v611 = {
        blockEnded: v495,
        id: v427,
        lastBid: v440
        };
      const v612 = await txn1.getOutput('Bidder_stopAuction', 'v611', ctc7, v611);
      if (v253) {
        stdlib.protect(ctc8, await interact.out(v559, v612), {
          at: './test_auction.rsh:99:25:application',
          fs: ['at ./test_auction.rsh:99:25:application call to [unknown function] (defined at: ./test_auction.rsh:99:25:function exp)', 'at ./test_auction.rsh:112:39:application call to "notify" (defined at: ./test_auction.rsh:104:34:function exp)', 'at ./test_auction.rsh:104:34:application call to [unknown function] (defined at: ./test_auction.rsh:104:34:function exp)'],
          msg: 'out',
          who: 'Bidder_stopAuction'
          });
        }
      else {
        }
      
      const v1184 = v437;
      const v1185 = v438;
      const v1186 = false;
      const v1187 = v440;
      const v1188 = v495;
      const v1190 = stdlib.gt(v435, v441);
      const v1191 = v1190 ? false : false;
      if (v1191) {
        return;
        }
      else {
        ;
        const v1192 = 'sold                ';
        null;
        if (v438) {
          return;
          }
        else {
          ;
          const v1193 = 'notSold             ';
          const v1194 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
          null;
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
  const ctc8 = stdlib.T_Tuple([ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Bidder_bid0_83: ctc8,
    Bidder_stopAuction0_83: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc0]);
  const ctc12 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc13 = stdlib.T_Bool;
  
  
  const v388 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v389 = v388.deadline;
  const v390 = v388.description;
  const v391 = v388.id;
  const v392 = v388.link;
  const v393 = v388.owner;
  const v394 = v388.price;
  const v395 = v388.title;
  const v396 = v388.tokenId;
  
  const v407 = {
    deadline: v389,
    description: v390,
    id: v391,
    link: v392,
    owner: v393,
    price: v394,
    title: v395
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v396, v407],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./test_auction.rsh:55:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7],
    pay: [stdlib.checkedBigNumberify('./test_auction.rsh:55:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v409, v410], secs: v412, time: v411, didSend: v45, from: v408 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v409
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
  const {data: [v409, v410], secs: v412, time: v411, didSend: v45, from: v408 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v408, v409, v410, v411],
    evt_cnt: 0,
    funcNum: 1,
    lct: v411,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test_auction.rsh:57:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./test_auction.rsh:9:13:decimal', stdlib.UInt_max, '1'), v409]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v419, time: v418, didSend: v52, from: v417 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./test_auction.rsh:9:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v409
        });
      const v427 = v410.id;
      const v428 = await ctc.getContractInfo();
      const v429 = v418;
      const v430 = v410.link;
      const v431 = v410.title;
      const v432 = v410.description;
      null;
      const v433 = v410.deadline;
      const v435 = stdlib.safeAdd(v411, v433);
      const v436 = v410.owner;
      const v437 = v436;
      const v438 = true;
      const v439 = true;
      const v440 = stdlib.checkedBigNumberify('./test_auction.rsh:73:17:decimal', stdlib.UInt_max, '0');
      const v441 = v418;
      const v442 = v411;
      
      if (await (async () => {
        const v456 = stdlib.gt(v435, v442);
        const v457 = v456 ? v439 : false;
        
        return v457;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v437,
          tok: v409
          });
        const v637 = 'sold                ';
        null;
        if (v438) {
          sim_r.txns.push({
            kind: 'halt',
            tok: v409
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v436,
            tok: undefined /* Nothing */
            });
          const v645 = 'notSold             ';
          const v646 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v409
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
    tys: [ctc3, ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v419, time: v418, didSend: v52, from: v417 } = txn2;
  ;
  ;
  const v426 = stdlib.addressEq(v408, v417);
  stdlib.assert(v426, {
    at: './test_auction.rsh:57:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v427 = v410.id;
  const v428 = await ctc.getContractInfo();
  const v429 = v418;
  const v430 = v410.link;
  const v431 = v410.title;
  const v432 = v410.description;
  null;
  const v433 = v410.deadline;
  const v435 = stdlib.safeAdd(v411, v433);
  const v436 = v410.owner;
  let v437 = v436;
  let v438 = true;
  let v439 = true;
  let v440 = stdlib.checkedBigNumberify('./test_auction.rsh:73:17:decimal', stdlib.UInt_max, '0');
  let v441 = v418;
  let v442 = v411;
  
  let txn3 = txn2;
  while (await (async () => {
    const v456 = stdlib.gt(v435, v442);
    const v457 = v456 ? v439 : false;
    
    return v457;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: ['time', v435],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v408, v409, v427, v435, v436, v437, v438, v439, v440, v441],
        evt_cnt: 0,
        funcNum: 4,
        lct: v441,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./test_auction.rsh:117:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v623, time: v622, didSend: v333, from: v621 } = txn5;
          
          ;
          const cv437 = v437;
          const cv438 = v438;
          const cv439 = v439;
          const cv440 = v440;
          const cv441 = v622;
          const cv442 = v441;
          
          await (async () => {
            const v437 = cv437;
            const v438 = cv438;
            const v439 = cv439;
            const v440 = cv440;
            const v441 = cv441;
            const v442 = cv442;
            
            if (await (async () => {
              const v456 = stdlib.gt(v435, v442);
              const v457 = v456 ? v439 : false;
              
              return v457;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v437,
                tok: v409
                });
              const v637 = 'sold                ';
              null;
              if (v438) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v409
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v436,
                  tok: undefined /* Nothing */
                  });
                const v645 = 'notSold             ';
                const v646 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v409
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
        tys: [ctc3, ctc5, ctc0, ctc0, ctc3, ctc3, ctc13, ctc13, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v623, time: v622, didSend: v333, from: v621 } = txn5;
      ;
      const v624 = stdlib.addressEq(v408, v621);
      stdlib.assert(v624, {
        at: './test_auction.rsh:117:32:dot',
        fs: ['at ./test_auction.rsh:116:46:application call to [unknown function] (defined at: ./test_auction.rsh:116:46:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv437 = v437;
      const cv438 = v438;
      const cv439 = v439;
      const cv440 = v440;
      const cv441 = v622;
      const cv442 = v441;
      
      v437 = cv437;
      v438 = cv438;
      v439 = cv439;
      v440 = cv440;
      v441 = cv441;
      v442 = cv442;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v494], secs: v496, time: v495, didSend: v253, from: v493 } = txn4;
      switch (v494[0]) {
        case 'Bidder_bid0_83': {
          const v497 = v494[1];
          undefined /* setApiDetails */;
          const v502 = v497[stdlib.checkedBigNumberify('./test_auction.rsh:79:22:spread', stdlib.UInt_max, '0')];
          const v503 = stdlib.gt(v502, v440);
          stdlib.assert(v503, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./test_auction.rsh:80:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test_auction.rsh:79:41:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:79:41:function exp)', 'at ./test_auction.rsh:70:83:application call to [unknown function] (defined at: ./test_auction.rsh:70:83:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Seller'
            });
          ;
          const v513 = [v437, v440];
          await txn4.getOutput('Bidder_bid', 'v513', ctc11, v513);
          if (v438) {
            const v536 = 'bidSuccess          ';
            null;
            const cv437 = v493;
            const cv438 = false;
            const cv439 = v439;
            const cv440 = v502;
            const cv441 = v495;
            const cv442 = v441;
            
            v437 = cv437;
            v438 = cv438;
            v439 = cv439;
            v440 = cv440;
            v441 = cv441;
            v442 = cv442;
            
            txn3 = txn4;
            continue;}
          else {
            ;
            const v529 = 'bidSuccess          ';
            null;
            const cv437 = v493;
            const cv438 = false;
            const cv439 = v439;
            const cv440 = v502;
            const cv441 = v495;
            const cv442 = v441;
            
            v437 = cv437;
            v438 = cv438;
            v439 = cv439;
            v440 = cv440;
            v441 = cv441;
            v442 = cv442;
            
            txn3 = txn4;
            continue;}
          break;
          }
        case 'Bidder_stopAuction0_83': {
          const v559 = v494[1];
          undefined /* setApiDetails */;
          ;
          const v605 = 'endSuccess          ';
          null;
          const v609 = 'down                ';
          const v610 = stdlib.checkedBigNumberify('./test_auction.rsh:111:80:decimal', stdlib.UInt_max, '1');
          null;
          const v611 = {
            blockEnded: v495,
            id: v427,
            lastBid: v440
            };
          await txn4.getOutput('Bidder_stopAuction', 'v611', ctc12, v611);
          const cv437 = v437;
          const cv438 = v438;
          const cv439 = false;
          const cv440 = v440;
          const cv441 = v495;
          const cv442 = v441;
          
          v437 = cv437;
          v438 = cv438;
          v439 = cv439;
          v440 = cv440;
          v441 = cv441;
          v442 = cv442;
          
          txn3 = txn4;
          continue;
          break;
          }
        }}
    
    }
  ;
  const v637 = 'sold                ';
  null;
  if (v438) {
    return;
    }
  else {
    ;
    const v645 = 'notSold             ';
    const v646 = stdlib.checkedBigNumberify('./test_auction.rsh:124:67:decimal', stdlib.UInt_max, '0');
    null;
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_stopAuction5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`, `Bidder_stopAuction()(uint64,uint64,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`, `Bidder_stopAuction()(uint64,uint64,uint64)`]
    },
  appApproval: `ByANAAEEBQgg1u3bjgoDMCh6ggGgjQYmBAEBAQAAGN8aiWtiaWRTdWNjZXNzAAAAAAAAAAAAACI1ADEYQQSkKmRJIls1ASEEWzUCNhoAF0lBADMiNQQjNQZJIQYMQAASIQYSRCo1/yg0/1AhBK9QQgCbgaCbvIEBEkQ2GgE1/yk0/1BCAIc2GgIXNQQ2GgM2GgEXSSEHDEAB8kkkDEAAbCQSRCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lXACA1/yEIWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0AyEJWzT+NANXOCA0A1dYIDQDV3gBFzQDV3kBFzQDIQpbMgY0AyELW0ICh0glNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSlcAIDX/IQVbNf4hCVs1/SEIWzX8VzggNftXWCA1+ld4ARc1+Vd5ARc1+CEKWzX3IQtbNfZJNQU19YAEkfGnmjT1ULAyBjT8DEQ09SJVQACJNPVXAQg19DT0F0k18zT3DUQ084gDcYAIAAAAAAAAAgE0+jT3FlBQsDT6NPcWUDUHNPlBACIrNP0WUDTzFlCwNP80/jT9NPw0+zEAIjT4NPMyBjT2QgHCsSKyATT3sggjshA0+rIHsys0/RZQNPMWULA0/zT+NP00/DT7MQAiNPg08zIGNPZCAZCAGN8aiWtlbmRTdWNjZXNzAAAAAAAAAAAAADT9FlA09xZQsIAY3xqJa2Rvd24AAAAAAAAAAAAAAAAAAAAANP0WUIAIAAAAAAAAAAFQsIAIAAAAAAAAAmM0/RYyBhZQNPcWUFCwNP0WMgYWUDT3FlA1BzT/NP40/TT8NPs0+jT5IjT3MgY09kIBB0kjDEAAkiMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBVs1/lcoyTX9gfEBWzX8gASai5F0sCM0/ogCSDT/MQASRDT9gVhbNfuABD6MbNY0+xZQMRgWUDIGFlA0/VdgMlA0/Ve6D1A0/VcIUFCwNP1XkiA1+jT/NP40+zT8NP0iWwg0+kkjIyIyBjT8QgBvSCEMiAHXIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwjJNf6ABDssraA0/xZQNP5QsCEMiAGnsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+UDIGFlApSwFXAH9nKEsBV396Z0gjNQEyBjUCQgEcNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT4NP8NNPwQQQA+NPU09hZQNPcWUDT4FlA0+VA0+lA0+xZRBwhQKFA0/RZQNP4WUClLAVcAf2coSwFXfwtnSCU1ATIGNQJCAL2xIrIBI7ISJLIQNPqyFDT2shGzgBjfGolrc29sZAAAAAAAAAAAAAAAAAAAAAA09xZQNP0WULA0+0EAGrEisgEishIkshAyCbIVMgqyFDT2shGzQgBNsSKyATT9sggjshA0+bIHs4AY3xqJa25vdFNvbGQAAAAAAAAAAAAAAAAANPcWUCEEr1CwsSKyASKyEiSyEDIJshUyCrIUNPayEbNCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 249,
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
                "name": "v409",
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
                    "internalType": "struct T0",
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
                    "internalType": "struct T1",
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
                "internalType": "struct T2",
                "name": "v410",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v409",
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
                    "internalType": "struct T0",
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
                    "internalType": "struct T1",
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
                "internalType": "struct T2",
                "name": "v410",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T10",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_bid0_83",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_stopAuction0_83",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v494",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T10",
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
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v513",
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
        "internalType": "struct T16",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v611",
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
        "internalType": "struct T1",
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
        "internalType": "struct T0",
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
        "internalType": "struct T15",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bidder_stopAuction",
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
        "internalType": "struct T16",
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
        "internalType": "struct T10",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_bid0_83",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_stopAuction0_83",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v494",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T10",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200221f3803806200221f83398101604081905262000026916200035b565b60008055436003556040517f7e3588f52ab43423d1925104123ec2f6358751c5c79410e39cb72fa53a638433906200006290339084906200052a565b60405180910390a1620000783415600762000171565b620000fe604080516080808201835260008083526020808401829052845160e081018652828152855160608082018852848252818401859052818801859052828401919091528187018490528651808801885284815292830184905281019190915291820181905260a0820181905260c082015290918201908152602001600081525090565b33815260208083018051516001600160a01b03168284015251810151604080840191909152436060840181905260016000819055555162000142918391016200056f565b60405160208183030381529060405260029080519060200190620001689291906200019b565b505050620005f4565b81620001975760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001a990620005b7565b90600052602060002090601f016020900481019282620001cd576000855562000218565b82601f10620001e857805160ff191683800117855562000218565b8280016001018555821562000218579182015b8281111562000218578251825591602001919060010190620001fb565b50620002269291506200022a565b5090565b5b808211156200022657600081556001016200022b565b604080519081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002f257600080fd5b919050565b6000604082840312156200030a57600080fd5b6200031462000241565b8251815260208301519091506001600160701b0319811681146200033757600080fd5b602082015292915050565b80516001600160881b031981168114620002f257600080fd5b60008183036101808112156200037057600080fd5b6200037a62000241565b8351815261016080601f19840112156200039357600080fd5b6200039d62000241565b620003ab60208701620002da565b815261014080603f1986011215620003c257600080fd5b620003cc62000278565b604088015181526060605f1987011215620003e657600080fd5b620003f0620002a9565b606089015181526080890151602082015260a08901519096506001600160801b0319811681146200042057600080fd5b8060408801525085602082015260c08801516040820152620004468960e08a01620002f7565b60608201526200045a6101208901620002da565b60808201528188015160a08201526200047584890162000342565b60c082015280602084015250508060208401525050809250505092915050565b805182526020810151805160208401526020810151604084015260018060801b0319604082015116606084015250604081015160808301526060810151620004f460a0840182805182526020908101516001600160701b031916910152565b5060808101516001600160a01b031660e083015260a081015161010083015260c001516001600160881b03191661012090910152565b6001600160a01b0383811682528251602080840191909152808401518051909216604084015201516101a082019062000567606084018262000495565b509392505050565b81516001600160a01b039081168252602080840151909116908201526040808301516101a0830191620005a59084018262000495565b50606083015161018083015292915050565b600181811c90821680620005cc57607f821691505b60208210811415620005ee57634e487b7160e01b600052602260045260246000fd5b50919050565b611c1b80620006046000396000f3fe6080604052600436106100795760003560e01c8063a7661d541161004b578063a7661d54146100e1578063ab53f2c6146100f4578063b627922414610117578063eeb776fb1461014e57005b80631e93b0f1146100825780632c10a159146100a657806383230757146100b95780639afd0bea146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b436600461148d565b610178565b3480156100c557600080fd5b50600154610093565b6100806100dc3660046114a5565b61019c565b6100806100ef36600461148d565b6101bc565b34801561010057600080fd5b506101096101dc565b60405161009d9291906114e3565b61012a61012536600461151d565b610279565b6040805182516001600160a01b03168152602092830151928101929092520161009d565b61015661029c565b604080518251815260208084015190820152918101519082015260600161009d565b610180611227565b61019861019236849003840184611671565b826102cd565b5050565b6101a4611227565b6101986101b6368490038401846116d5565b8261059f565b6101c4611227565b6101986101d636849003840184611671565b82610aa9565b6000606060005460028080546101f19061177a565b80601f016020809104026020016040519081016040528092919081815260200182805461021d9061177a565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261029682610c99565b92915050565b6102c060405180606001604052806000815260200160008152602001600081525090565b6102c8610ce2565b905090565b6102dd600160005414600b610d34565b81516102f89015806102f157508251600154145b600c610d34565b60008080556002805461030a9061177a565b80601f01602080910402602001604051908101604052809291908181526020018280546103369061177a565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505080602001905181019061039b9190611830565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16103f234156008610d34565b61040c6104053383602001516001610d5a565b6009610d34565b8051610424906001600160a01b03163314600a610d34565b6040818101518082015160608083015160c080850151602095860151875195865230868801524386890152835194860194909452918501516dffffffffffffffffffffffffffff191660808501526001600160881b031990911660a08401528151908301529182015160e08201529101516fffffffffffffffffffffffffffffffff19166101008201527f42501ca8d15eb04e579176e8148e5c5992b37e55e9c0407b1a6e528a505c9f07906101200160405180910390a16104e4611272565b815181516001600160a01b039182169052602080840151835192169101526040808301805182015183519092019190915260608301519051516105279190610d72565b81516060908101919091526040808401805160809081015185516001600160a01b039182169083015291518101516020808701805192909416909152825160019101819052825190930192909252805160009084015280514392019190915290830151905160a0015261059981610dbf565b50505050565b6105af6005600054146010610d34565b81516105ca9015806105c357508251600154145b6011610d34565b6000808055600280546105dc9061177a565b80601f01602080910402602001604051908101604052809291908181526020018280546106089061177a565b80156106555780601f1061062a57610100808354040283529160200191610655565b820191906000526020600020905b81548152906001019060200180831161063857829003601f168201915b505050505080602001905181019061066d9190611958565b90506106776112dc565b610688826060015143106012610d34565b7f39ae3ba5ee3db2e9c76c06676722712e4f649f643eb75593d77bfa217c7b420033856040516106b9929190611a1c565b60405180910390a160006020850151515160018111156106db576106db611a06565b14156108e85760208085015151015180825261010083015190516107019110600d610d34565b805151610711903414600e610d34565b60a0820151602082810180516001600160a01b039384169052610100850151815183015251604080518251909416845290820151918301919091527fdb14641863d8db745312648123cc29458ed8cb6b6c70eed69783281ca8ad1984910160405180910390a16020810151835260c08201511561086a57696269645375636365737360b01b606082018190526040808401518351519151600080516020611bc6833981519152936107c493909291611a83565b60405180910390a16107d4611272565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865195169481019490945282850180513390528051600094019390935260e08701518351901515920191909152845151825190910152805143920191909152610120840151905160a0015261086481610dbf565b50610599565b8160a001516001600160a01b03166108fc8361010001519081150290604051600060405180830381858888f193505050501580156108ac573d6000803e3d6000fd5b50696269645375636365737360b01b6040808301829052838101518351519151600080516020611bc6833981519152936107c493909291611a83565b600160208501515151600181111561090257610902611a06565b1415610599576109143415600f610d34565b69656e645375636365737360b01b608082018190526040808401516101008501519151600080516020611bc68339815191529361095393909291611a83565b60405180910390a1633237bbb760e11b60a082018190526040808401519051600080516020611bc683398151915292610990929091600190611a83565b60405180910390a160408281015160c083018051919091528051436020918201526101008501518251840152905182518151815281830151928101929092528201518183015290517fd8ee8d4542b779bdeb00b4f37f8be811f388a118ae414f943e7424d7687cbcd49181900360600190a160c08101516020840152610a14611272565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855182015260808088015186519086169082015260a080890151858801805191909716905260c08901518651901515950194909452845160009301929092526101008701518451909101528251439101526101208501519151015261086481610dbf565b610ab96005600054146015610d34565b8151610ad4901580610acd57508251600154145b6016610d34565b600080805560028054610ae69061177a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b129061177a565b8015610b5f5780601f10610b3457610100808354040283529160200191610b5f565b820191906000526020600020905b815481529060010190602001808311610b4257829003601f168201915b5050505050806020019051810190610b779190611958565b9050610b8b81606001514310156017610d34565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1610bde34156013610d34565b8051610bf6906001600160a01b031633146014610d34565b610bfe611272565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451820152606080860151855182015260808087015186519086169082015260a080880151858801805191909716905260c0880151865190151595019490945260e087015185519015159301929092526101008601518451909101528251439101526101208401519151015261059981610dbf565b6040805180820190915260008082526020820152610cb5611354565b60208181018051516000905251510151839052610cd0611227565b610cda828261059f565b519392505050565b610d0660405180606001604052806000815260200160008152602001600081525090565b610d0e611354565b60208101515160019052610d20611227565b610d2a828261059f565b6020015192915050565b816101985760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610d6883853085611028565b90505b9392505050565b600082610d7f8382611aaa565b91508110156102965760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610d51565b6040805180820190915260008082526020820152602082015160a0015182516060015111610dee576000610df8565b8160200151604001515b15610f08576040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091528251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015185168187015283880180515190951660a08701528451840151151560c0870152600160e087018190528551909201516101008701529351909301516101208501526005600055439092559051610ee491839101611ad0565b6040516020818303038152906040526002908051906020019061059992919061136e565b610f248260000151602001518360200151600001516001611102565b631cdbdb1960e21b80825282516040908101516020850151606001519151600080516020611bc683398151915293610f5e93909291611a83565b60405180910390a181602001516020015115610f8a5760008080556001819055610198906002906113f2565b8151608001516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610fcf573d6000803e3d6000fd5b50661b9bdd14dbdb1960ca1b6020820181905282516040908101519051600080516020611bc68339815191529261100a929091600090611a83565b60405180910390a160008080556001819055610198906002906113f2565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161108f91611b8c565b60006040518083038185875af1925050503d80600081146110cc576040519150601f19603f3d011682016040523d82523d6000602084013e6110d1565b606091505b50915091506110e28282600161111b565b50808060200190518101906110f79190611ba8565b979650505050505050565b61110d838383611156565b61111657600080fd5b505050565b6060831561112a575081610d6b565b82511561113a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610d51565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916111b591611b8c565b60006040518083038185875af1925050503d80600081146111f2576040519150601f19603f3d011682016040523d82523d6000602084013e6111f7565b606091505b50915091506112088282600261111b565b508080602001905181019061121d9190611ba8565b9695505050505050565b6040805160808101825260009181018281526060820192909252908190815260200161126d60405180606001604052806000815260200160008152602001600081525090565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b604080516101008101909152600060e0820190815281908152602001611312604080518082019091526000808252602082015290565b81526000602080830182905260408084018390526060808501849052608085018490528151908101825283815291820183905281019190915260a09091015290565b60405180604001604052806000815260200161126d61142f565b82805461137a9061177a565b90600052602060002090601f01602090048101928261139c57600085556113e2565b82601f106113b557805160ff19168380011785556113e2565b828001600101855582156113e2579182015b828111156113e25782518255916020019190600101906113c7565b506113ee929150611442565b5090565b5080546113fe9061177a565b6000825580601f1061140e575050565b601f01602090049060005260206000209081019061142c9190611442565b50565b604051806020016040528061126d611457565b5b808211156113ee5760008155600101611443565b604080516060810190915280600081526020016114806040518060200160405280600081525090565b8152600060209091015290565b60006040828403121561149f57600080fd5b50919050565b60006080828403121561149f57600080fd5b60005b838110156114d25781810151838201526020016114ba565b838111156105995750506000910152565b82815260406020820152600082518060408401526115088160608501602087016114b7565b601f01601f1916919091016060019392505050565b60006020828403121561152f57600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561156757634e487b7160e01b600052604160045260246000fd5b801515811461142c57600080fd5b60006040828403121561168357600080fd5b6040516040810181811067ffffffffffffffff821117156116b457634e487b7160e01b600052604160045260246000fd5b6040528235815260208301356116c981611663565b60208201529392505050565b600081830360808112156116e857600080fd5b6116f0611536565b833581526060601f198301121561170657600080fd5b61170e61156d565b61171661159e565b60208601356002811061172857600080fd5b81526020603f198501121561173c57600080fd5b61174461156d565b6040870135815260208201526060860135935061176084611663565b604081019390935291825260208101919091529392505050565b600181811c9082168061178e57607f821691505b6020821081141561149f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146117c657600080fd5b919050565b6000604082840312156117dd57600080fd5b6117e5611536565b90508151815260208201516dffffffffffffffffffffffffffff198116811461180d57600080fd5b602082015292915050565b80516001600160881b0319811681146117c657600080fd5b60008183036101a081121561184457600080fd5b61184c6115cf565b611855846117af565b8152611863602085016117af565b602082015261014080603f198401121561187c57600080fd5b611884611600565b604086015181526060605f198501121561189d57600080fd5b6118a561159e565b9350606086015184526080860151602085015260a08601516fffffffffffffffffffffffffffffffff19811681146118dc57600080fd5b8060408601525083602082015260c086015160408201526119008760e088016117cb565b606082015261191261012087016117af565b60808201528186015160a082015261192d6101608701611818565b60c082015260408301525061018093909301516060840152509092915050565b80516117c681611663565b6000610140828403121561196b57600080fd5b611973611631565b61197c836117af565b815261198a602084016117af565b602082015260408301516040820152606083015160608201526119af608084016117af565b60808201526119c060a084016117af565b60a08201526119d160c0840161194d565b60c08201526119e260e0840161194d565b60e08201526101008381015190820152610120928301519281019290925250919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160a08301919060028110611a5d57634e487b7160e01b600052602160045260246000fd5b806040850152506020810151516060840152604081015115156080840152509392505050565b6bffffffffffffffffffffffff199390931683526020830191909152604082015260600190565b60008219821115611acb57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815261014081016020830151611afc60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151611b2b60808401826001600160a01b03169052565b5060a0830151611b4660a08401826001600160a01b03169052565b5060c0830151611b5a60c084018215159052565b5060e0830151611b6e60e084018215159052565b50610100838101519083015261012092830151929091019190915290565b60008251611b9e8184602087016114b7565b9190910192915050565b600060208284031215611bba57600080fd5b8151610d6b8161166356feacf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21a2646970667358221220452f0ec033d72a61c0516e0da4082db126ec4feac05f362552e7602ff657fc2664736f6c634300080c0033`,
  BytecodeLen: 8735,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './test_auction.rsh:56:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './test_auction.rsh:126:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './test_auction.rsh:126:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './test_auction.rsh:70:83:after expr stmt semicolon',
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
  "Bidder_bid": Bidder_bid,
  "Bidder_stopAuction": Bidder_stopAuction,
  "Seller": Seller
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid,
    stopAuction: Bidder_stopAuction
    }
  };
