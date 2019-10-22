(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quiz"] = factory();
	else
		root["Quiz"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "e63b6e406ad886c1a3bc";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Quiz": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/quiz/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var FetcherVue = Site.FetcherVue;
/*
 answertime
 num
 points
 question
 questiontime
 rightanswer
 studentanswer
 token
  */

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['memberid', 'assigntag', 'quiztag'],
  data: function data() {
    return {
      fetching: true,
      user: null,
      section: null,
      assignment: null,
      tries: null,
      token: null,
      answers: null,
      answer: null
    };
  },
  components: {
    'fetcher': FetcherVue
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(': Quiz Result');
    this.$site.api.get("/api/quiz/result/".concat(this.memberid, "/").concat(this.assigntag, "/").concat(this.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        _this.user = new Users.User(response.getData('quiz-user').attributes);
        var member = _this.user.member;
        _this.section = _this.$store.getters['course/section'](member.semester, member.section);
        _this.assignment = _this.section.getAssignment(_this.assigntag);
        _this.tries = response.getData('quiz-tries').attributes;
        var answers = response.getData('quiz-answers');

        if (answers !== null) {
          _this.token = answers.id;
          _this.answers = answers.attributes;
          _this.answer = _this.answers.length > 0 ? _this.answers[0] : null;
        } else {
          _this.token = null;
          _this.answers = null;
          _this.answer = null;
        }

        _this.fetching = false;
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);

      _this.$site.toast(_this, error);
    });
  },
  methods: {
    time: function time(value) {
      return this.$site.TimeFormatter.relativeUNIX(value);
    },
    elapsed: function elapsed(start, end) {
      if (end === null) {
        return '';
      }

      var diff = end - start;
      var min = Math.floor(diff / 60);
      var sec = diff % 60;
      return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
    },
    selectTry: function selectTry(token) {
      var _this2 = this;

      //this.fetching = true;
      this.$site.api.get("/api/quiz/result/token/".concat(token), {}).then(function (response) {
        if (!response.hasError()) {
          _this2.token = token;
          var answers = response.getData('quiz-answers');

          if (answers !== null) {
            _this2.answers = answers.attributes;
            _this2.answer = _this2.answers.length > 0 ? _this2.answers[0] : null;
          } else {
            _this2.answers = null;
            _this2.answer = null;
          }

          _this2.fetching = false;
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        console.log(error);

        _this2.$site.toast(_this2, error);
      });
    },
    selectAnswer: function selectAnswer(num) {
      this.answer = this.answers[num - 1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      quizTags: [],
      results: null,
      assignment: null,
      eye: Site.root + '/vendor/cl/site/img/eye16.png'
    };
  },
  methods: {
    process: function process(results) {
      this.results = results; // Collect up the quiz tags

      for (var member in results) {
        for (var quizTag in results[member]) {
          if (this.quizTags.indexOf(quizTag) < 0) {
            this.quizTags.push(quizTag);
          }
        }
      }
    },
    status: function status(user, tag) {
      var result = this.quizResult(user, tag);

      if (result === null) {
        return '';
      }

      return '' + result.points + '/' + result.maxpoints;
    },
    total: function total(user) {
      if (this.results === null || this.assignment === null) {
        return '';
      }

      var sum = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.quizTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;
          var result = this.quizResult(user, tag);

          if (result !== null) {
            sum += +result.points;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '' + sum + '/' + this.assignment.quiz;
    },

    /**
     * GEt a quiz result for a user if one exists, otherwise return null.
     * @param user User object
     * @param tag quiz tag
     * @returns {*}
     */
    quizResult: function quizResult(user, tag) {
      if (this.results === null) {
        return null;
      }

      if (this.results[user.id] !== undefined && this.results[user.id][tag] !== undefined) {
        var result = this.results[user.id][tag];
        return result;
      }

      return null;
    },
    link: function link(user, tag) {
      return "".concat(Site.root, "/cl/console/quiz/result/").concat(user.member.id, "/").concat(this.assignment.tag, "/").concat(tag);
    }
  },
  components: {
    'membersfetcher': MembersFetcherComponentVue
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Quiz Status');
    Site.api.get('/api/quiz/all/' + this.assigntag, query).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results-all');

        if (data !== null) {
          _this.process(data.attributes.results);
        }
      } else {
        Site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);
      Site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
/* harmony import */ var _Results_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue */ "./vendor/cl/quiz/js/Vue/Results.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['quiz'],
  components: {
    'results': _Results_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      if (this.quiz.question < this.quiz.length) {
        this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].QUESTION);
      }
    },
    retake: function retake() {
      window.location.reload(true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].RESULTS);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].RESULTS);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuizData */ "./vendor/cl/quiz/js/QuizData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      question: null,
      comment: null,
      time: 0,
      mustProvideMessage: undefined
    };
  },
  props: ['quiz', 'file'],
  watch: {
    file: function file(newQuiz, oldQuiz) {
      this.fetch();
    }
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      var query = {
        file: this.file
      };
      this.$site.api.get("/api/quiz/preview/".concat(this.quiz.token), query).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-question');
          _this.question = data.attributes.question;
          _this.time = data.attributes.time;
          _this.comment = data.attributes.comment;
          _this.answers = data.attributes.answers;
          _this.mustProvideMessage = data.attributes.mustProvideMessage;
          var after = document.getElementById('cl-quiz-after');

          if (after !== null) {
            after.innerHTML = data.attributes.after;
          }

          _this.$site.Vue.nextTick(function () {
            _this.$site.message('cl-quiz-after-installed', null);
          });
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    },
    proceed: function proceed() {},
    submit: function submit() {
      var formData = _QuizData__WEBPACK_IMPORTED_MODULE_0__["QuizData"].get(this, this.mustProvideMessage);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  data: function data() {
    return {
      previews: []
    };
  },
  mounted: function mounted() {
    for (var i = 0; i < this.quiz.preview.length; i++) {
      this.previews.push({
        num: i + 1,
        files: this.quiz.preview[i]
      });
    }
  },
  methods: {
    preview: function preview(file) {
      this.$emit('preview', file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuizData */ "./vendor/cl/quiz/js/QuizData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      question: null,
      time: 0,
      mustProvideMessage: undefined
    };
  },
  props: ['quiz'],
  mounted: function mounted() {
    var _this = this;

    this.$site.api.post("/api/quiz/question/".concat(this.quiz.token, "/").concat(this.quiz.question), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-question');
        _this.question = data.attributes.question;
        _this.time = data.attributes.time;
        _this.mustProvideMessage = data.attributes.mustProvideMessage;
        var after = document.getElementById('cl-quiz-after');

        if (after !== null) {
          after.innerHTML = data.attributes.after;
        }

        _this.$site.Vue.nextTick(function () {
          _this.$site.message('cl-quiz-after-installed', null);
        });
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    proceed: function proceed() {},
    submit: function submit() {
      var _this2 = this;

      var formData = _QuizData__WEBPACK_IMPORTED_MODULE_0__["QuizData"].get(this, this.mustProvideMessage);

      if (formData === null) {
        return;
      }

      this.$site.api.post("/api/quiz/answer/".concat(this.quiz.token, "/").concat(this.quiz.question), formData).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-answer');

          _this2.$emit('answer', data);
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        _this2.$site.toast(_this2, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  data: function data() {
    return {
      tries: null,
      high: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$site.api.get("/api/quiz/results/".concat(this.quiz.assigntag, "/").concat(this.quiz.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results');
        _this.tries = data.attributes.tries;
        _this.high = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.tries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tried = _step.value;

            if (+tried.points > +_this.high) {
              _this.high = tried.points;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    time: function time(value) {
      return this.$site.TimeFormatter.relativeUNIX(value);
    },
    elapsed: function elapsed(start, end) {
      if (end === null) {
        return '';
      }

      var diff = end - start;
      var min = Math.floor(diff / 60);
      var sec = diff % 60;
      return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/quiz/_quiz.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/quiz/_quiz.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.cl-quiz {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc; }\n\ndiv.cl-quiz {\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: #ecffef; }\n  div.cl-quiz > div {\n    width: 100%; }\n  div.cl-quiz > div.content {\n    padding: 0; }\n  div.cl-quiz div.cl-results {\n    width: 80%;\n    margin: 0 auto; }\n  div.cl-quiz h2 {\n    border: 0;\n    margin-top: 14px; }\n  div.cl-quiz div.cl-multi {\n    margin: 1em 0;\n    padding: 0 0 0 3em; }\n    div.cl-quiz div.cl-multi p {\n      margin: 0; }\n  div.cl-quiz p.done {\n    background: #c41425;\n    text-align: center;\n    color: white; }\n  div.cl-quiz button {\n    width: 10em;\n    font-size: 0.9em; }\n  div.cl-quiz tr.best td {\n    background: #dde; }\n  div.cl-quiz div.previewer {\n    clear: both;\n    border-top: 1px solid black; }\n    div.cl-quiz div.previewer h3 {\n      margin: 0;\n      font-size: 1.2em; }\n    div.cl-quiz div.previewer ul {\n      margin-top: 0; }\n  div.cl-quiz div.preview {\n    margin: 0 0 1em 0; }\n    div.cl-quiz div.preview hr {\n      margin: 0; }\n    div.cl-quiz div.preview h3 {\n      text-align: center; }\n    div.cl-quiz div.preview p.preview {\n      font-style: italic;\n      margin-top: 0;\n      text-align: center;\n      border-bottom: 1px solid black; }\n  div.cl-quiz p.cl-quiz-answer-note {\n    text-align: center;\n    font-style: italic;\n    color: #800; }\n\n@media only screen and (max-width: 750px) {\n  #quiz {\n    margin-right: 5px; } }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.cl-about[data-v-d981142c] {\n  margin: 1em auto;\n  display: table;\n}\ndiv.cl-about p[data-v-d981142c] {\n    display: table-row;\n}\ndiv.cl-about p span[data-v-d981142c] {\n      display: table-cell;\n      text-align: left;\n}\ndiv.cl-about p span[data-v-d981142c]:first-child {\n      text-align: right;\n      padding-right: 1em;\n}\ntr[data-v-d981142c] {\n  cursor: pointer;\n}\ntr[data-v-d981142c]:first-child {\n  cursor: default;\n}\ntr.selected td[data-v-d981142c] {\n  background: #88ffff;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "table td[data-v-c268df96] {\n  text-align: center;\n}\ntable td[data-v-c268df96]:nth-child(1), table td[data-v-c268df96]:nth-child(2), table td[data-v-c268df96]:nth-child(3), table td[data-v-c268df96]:nth-child(4) {\n  text-align: left;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("fetcher", { attrs: { fetching: _vm.fetching } }, [
          !_vm.fetching
            ? _c("div", [
                _c("div", { staticClass: "cl-about" }, [
                  _c("p", [
                    _c("span", [_vm._v("Course Member: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.user.name))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("Assignment: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.assignment.name))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("Quiz: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.quiztag))])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "small center" },
                  [
                    _c("tr", [
                      _c("th", { staticClass: "center" }, [
                        _vm._v("When Taken")
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Finished?")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Points")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Max")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.tries, function(tried) {
                      return _c(
                        "tr",
                        {
                          class: tried.token === _vm.token ? "selected" : "",
                          on: {
                            click: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "default",
                                  undefined,
                                  $event.key,
                                  undefined
                                )
                              ) {
                                return null
                              }
                              return _vm.selectTry(tried.token)
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(_vm.time(tried.start)))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.elapsed(tried.start, tried.end)))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(tried.points))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(tried.maxpoints))])
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.answers !== null && _vm.answers.length > 0
                  ? _c(
                      "table",
                      { staticClass: "small center" },
                      [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Points")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Asked")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Answered")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.answers, function(ans) {
                          return _c(
                            "tr",
                            {
                              class:
                                _vm.answer !== null &&
                                ans.num === _vm.answer.num
                                  ? "selected"
                                  : "",
                              on: {
                                click: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "default",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.selectAnswer(ans.num)
                                }
                              }
                            },
                            [
                              _c("td", [_vm._v(_vm._s(ans.num))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ans.points))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.time(ans.questiontime)))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.time(ans.answertime)))
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.answers !== null && _vm.answers.length === 0
                  ? _c("div", [
                      _c("p", { staticClass: "centerbox primary center" }, [
                        _vm._v("No answers provided for this quiz try.")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.answer !== null
                  ? _c("div", { staticClass: "cl-quiz" }, [
                      _c("div", [
                        _c("h2", [
                          _vm._v(
                            "Question: " +
                              _vm._s(_vm.answer.num) +
                              " of " +
                              _vm._s(_vm.answers.length)
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "question",
                          domProps: { innerHTML: _vm._s(_vm.answer.question) }
                        }),
                        _vm._v(" "),
                        _c("h3", [_vm._v("Student answer:")]),
                        _vm._v(" "),
                        _c("pre", { staticClass: "code" }, [
                          _vm._v(_vm._s(_vm.answer.studentanswer))
                        ]),
                        _vm._v(" "),
                        _vm.answer.rightanswer.length > 0
                          ? _c("div", [
                              _c("h3", [_vm._v("Correct answer:")]),
                              _vm._v(" "),
                              _c("pre", { staticClass: "code" }, [
                                _vm._v(_vm._s(_vm.answer.rightanswer))
                              ])
                            ])
                          : _vm._e()
                      ])
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
          attrs: { fetching: _vm.results === null },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c(
                        "tr",
                        [
                          _c("th", [_vm._v("User")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Role")]),
                          _vm._v(" "),
                          _vm._l(_vm.quizTags, function(tag) {
                            return _c("th", { staticClass: "small" }, [
                              _vm._v(_vm._s(tag))
                            ])
                          }),
                          _vm._v(" "),
                          _vm.results !== null
                            ? _c("th", [_vm._v("Total")])
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          [
                            _c("td", [_vm._v(_vm._s(user.userId))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))]),
                            _vm._v(" "),
                            _vm._l(_vm.quizTags, function(tag) {
                              return _c(
                                "td",
                                [
                                  _vm._v(
                                    _vm._s(_vm.status(user, tag)) +
                                      "\n              "
                                  ),
                                  _vm.quizResult(user, tag) !== null
                                    ? _c(
                                        "router-link",
                                        { attrs: { to: _vm.link(user, tag) } },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                _vm.root +
                                                "/vendor/cl/site/img/eye16.png"
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm.results !== null
                              ? _c("td", [_vm._v(_vm._s(_vm.total(user)))])
                              : _vm._e()
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.quiz.length > 1
      ? _c("h2", [
          _vm._v(
            "Question " +
              _vm._s(_vm.quiz.question) +
              " of " +
              _vm._s(_vm.quiz.length)
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        ref: "form",
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.answer) } }),
        _vm._v(" "),
        _vm.quiz.question < _vm.quiz.length
          ? _c("p", [
              _c("button", { attrs: { type: "submit" } }, [
                _vm._v("Next Question")
              ])
            ])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.quiz.question >= _vm.quiz.length
      ? _c(
          "div",
          [
            _c("p", { staticClass: "done" }, [_vm._v("This Quiz is Complete")]),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v("You may "),
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.retake($event)
                    }
                  }
                },
                [_vm._v("retake the quiz")]
              ),
              _vm._v(" if you wish")
            ]),
            _vm._v(" "),
            _c("results", { attrs: { quiz: _vm.quiz } })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "centerbox comp center" }, [
        _vm._v("The quiz is closed and not available at this time.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "centerbox comp" }, [
      _vm._v(
        "The quiz has expired and can no longer be taken. Quizzes expire at the time\n    the assignment is due. "
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "You can proceed through the quiz for practice purposes, but new grades and\n    submissions will not be possible."
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("When ready, "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.proceed()
            }
          }
        },
        [_vm._v("click to proceed to the quiz.")]
      ),
      _vm._v(" You can also\n    "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.results()
            }
          }
        },
        [_vm._v("jump directly to your quiz results.")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.splash) } }),
    _vm._v(" "),
    _vm.quiz.lightning === null
      ? _c("p", { staticClass: "center" }, [
          _vm._v("This quiz has no specified time limit.")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.quiz.lightning !== null
      ? _c("p", { staticClass: "centerbox seconda center" }, [
          _vm._v(
            "This is a lightning quiz.\n    You have " +
              _vm._s(_vm.quiz.lightning) +
              " seconds to answer each question."
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("p", [
      _vm._v("When ready, "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.proceed()
            }
          }
        },
        [_vm._v("click to proceed to the quiz.")]
      ),
      _vm._v(" You can also\n    "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.results()
            }
          }
        },
        [_vm._v("jump directly to your quiz results.")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "preview" }, [
    _vm.question !== null
      ? _c("div", [
          _vm.quiz.length > 1
            ? _c("p", { staticClass: "preview" }, [
                _vm._v(
                  "Preview of " +
                    _vm._s(_vm.quiz.question) +
                    ". Available to staff only."
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "question-time" },
                domProps: { value: _vm.time }
              }),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(_vm.question) } }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.answers.length > 0 ? _c("h3", [_vm._v("Answers")]) : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.answers, function(answer) {
                return _c("div", [
                  _c("div", { domProps: { innerHTML: _vm._s(answer) } })
                ])
              }),
              _vm._v(" "),
              _vm.comment !== null
                ? _c("div", [
                    _c("h3", [_vm._v("Comment")]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "centerbox primary",
                      domProps: { innerHTML: _vm._s(_vm.comment) }
                    })
                  ])
                : _vm._e()
            ],
            2
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "previewer" }, [
    _c("h2", [_vm._v("Staff Question Previews")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "small" },
      _vm._l(_vm.previews, function(question) {
        return _c("div", { key: question.num }, [
          _c("h3", [_vm._v("Question " + _vm._s(question.num))]),
          _vm._v(" "),
          question.files.length > 0
            ? _c(
                "ul",
                _vm._l(question.files, function(file) {
                  return _c("li", [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.preview(file)
                          }
                        }
                      },
                      [_vm._v(_vm._s(file))]
                    )
                  ])
                }),
                0
              )
            : _vm._e()
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "These links allow you to preview quiz questions. If the question is randomly selected\n      from multiple files, the files appear below the question. "
      ),
      _c("span", { staticClass: "smallred" }, [
        _vm._v("This part of the page appears for\nstaff members only.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.question !== null
      ? _c("div", [
          _vm.quiz.length > 1
            ? _c("h2", [
                _vm._v(
                  "Question " +
                    _vm._s(_vm.quiz.question) +
                    " of " +
                    _vm._s(_vm.quiz.length)
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "question-time" },
                domProps: { value: _vm.time }
              }),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(_vm.question) } }),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-results" }, [
    _vm.tries !== null && _vm.tries.length > 0
      ? _c("div", [
          _c("p", [
            _vm._v(
              "Your current best score for this quiz is " +
                _vm._s(_vm.high) +
                "/" +
                _vm._s(_vm.quiz.points) +
                ". The system retains your best\n      result as your grade for a quiz."
            )
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "small center" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.tries, function(tried) {
                return _c(
                  "tr",
                  {
                    class:
                      _vm.high > 0 && tried.points === _vm.high ? "best" : ""
                  },
                  [
                    _c("td", [_vm._v(_vm._s(_vm.time(tried.start)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.elapsed(tried.start, tried.end)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(tried.points))])
                  ]
                )
              }),
              _vm._v(" "),
              _c("caption", [_vm._v("Results for Quiz")])
            ],
            2
          ),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "If a value is indicated in the Finished? column, the quiz\n    was completed in that amount of time (in minutes and seconds)."
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.tries !== null && _vm.tries.length === 0
      ? _c("p", { staticClass: "centerbox primary center" }, [
          _vm._v(
            "You have not yet completed the quiz, yet, so you do not have a score."
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "center" }, [_vm._v("When Taken")]),
      _vm._v(" "),
      _c("th", [_vm._v("Finished?")]),
      _vm._v(" "),
      _c("th", [_vm._v("Points")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c81835c0", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b6604770", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/quiz/_quiz.scss":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/_quiz.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/quiz/_quiz.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3bac01fe", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/quiz/_quiz.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/quiz/_quiz.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/quiz/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/quiz/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/QuizFactory */ "./vendor/cl/quiz/js/QuizFactory.js");
/* harmony import */ var _js_Console_QuizConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/QuizConsole */ "./vendor/cl/quiz/js/Console/QuizConsole.js");
/**
 * @file
 * The main Quiz entry point
 */

 //
// Create the Quiz components
//

_js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__["QuizFactory"].create(Site.Site); //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_QuizConsole__WEBPACK_IMPORTED_MODULE_1__["QuizConsole"].setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizConsole.js":
/*!**************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizConsole.js ***!
  \**************************************************/
/*! exports provided: QuizConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConsole", function() { return QuizConsole; });
/* harmony import */ var _QuizStatusComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue");
/* harmony import */ var _QuizResultComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizResultComponent.vue */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue");


/**
 * @file
 * Quiz system console components
 * @constructor
 */

var QuizConsole = function QuizConsole() {};

QuizConsole.setup = function (Console) {
  Console.tables.add({
    title: 'Quiz',
    order: 60,
    api: '/api/quiz/tables'
  });
  Console.components.addRoute({
    route: '/quiz/results/:assigntag',
    component: _QuizStatusComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    props: true
  });
  Console.components.addRoute({
    route: '/quiz/result/:memberid/:assigntag/:quiztag',
    component: _QuizResultComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    props: true
  });
  Console.course.assignmentLink('quiz', 'quizzes', '/quiz/results/:assigntag');
};

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
/* harmony import */ var _QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d981142c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d981142c')) {
      api.createRecord('d981142c', component.options)
    } else {
      api.reload('d981142c', component.options)
    }
    module.hot.accept(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
(function () {
      api.rerender('d981142c', {
        render: _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Console/QuizResultComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
/* harmony import */ var _QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c268df96",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c268df96')) {
      api.createRecord('c268df96', component.options)
    } else {
      api.reload('c268df96', component.options)
    }
    module.hot.accept(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
(function () {
      api.rerender('c268df96', {
        render: _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Console/QuizStatusComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Quiz.js":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/js/Quiz.js ***!
  \***********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _quiz_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_quiz.scss */ "./vendor/cl/quiz/_quiz.scss");
/* harmony import */ var _quiz_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_quiz_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Vue_Initial_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vue/Initial.vue */ "./vendor/cl/quiz/js/Vue/Initial.vue");
/* harmony import */ var _Vue_Question_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vue/Question.vue */ "./vendor/cl/quiz/js/Vue/Question.vue");
/* harmony import */ var _Vue_Answer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vue/Answer.vue */ "./vendor/cl/quiz/js/Vue/Answer.vue");
/* harmony import */ var _Vue_Expired_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vue/Expired.vue */ "./vendor/cl/quiz/js/Vue/Expired.vue");
/* harmony import */ var _Vue_Closed_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vue/Closed.vue */ "./vendor/cl/quiz/js/Vue/Closed.vue");
/* harmony import */ var _Vue_Results_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Vue/Results.vue */ "./vendor/cl/quiz/js/Vue/Results.vue");
/* harmony import */ var _Vue_Previewer_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vue/Previewer.vue */ "./vendor/cl/quiz/js/Vue/Previewer.vue");
/* harmony import */ var _Vue_Preview_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vue/Preview.vue */ "./vendor/cl/quiz/js/Vue/Preview.vue");
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./States */ "./vendor/cl/quiz/js/States.js");










/**
 * Quiz presentation Vue
 * @param site Site object
 * @constructor
 */

var Quiz = function Quiz(site) {
  this.initialize = function (element) {
    var quiz = JSON.parse(element.textContent);
    var template = "\n<div class=\"cl-quiz\">\n  <component :is=\"page\" :quiz=\"quiz\" :file=\"file\" v-on:answer=\"answer($event)\" v-on:new-state=\"newState($event)\"></component>\n  <previewer v-if=\"quiz.preview !== undefined\" :quiz=\"quiz\" v-on:preview=\"preview($event)\"></previewer>\n</div>";
    new site.Vue({
      el: element,
      template: template,
      site: site,
      data: function data() {
        return {
          quiz: quiz,
          state: _States__WEBPACK_IMPORTED_MODULE_9__["States"].INITIAL,
          page: 'initial',
          file: null,
          after: null
        };
      },
      components: {
        'initial': _Vue_Initial_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        'question': _Vue_Question_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        'answer': _Vue_Answer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        'expired': _Vue_Expired_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        'closed': _Vue_Closed_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        'results': _Vue_Results_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        'previewer': _Vue_Previewer_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        'preview': _Vue_Preview_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
      },
      mounted: function mounted() {
        if (this.quiz.expired === true) {
          this.page = 'expired';
        } else if (this.quiz.closed === true) {
          this.page = 'closed';
        }

        this.after = document.getElementById('cl-quiz-after');

        if (this.after !== null) {
          this.after.innerHTML = '';
        }
      },
      methods: {
        newState: function newState(state) {
          switch (state) {
            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].START:
              this.start();
              break;

            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].QUESTION:
              if (this.quiz.question < this.quiz.length) {
                this.quiz.question++;
                this.page = 'question';
              }

              break;

            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].RESULTS:
              this.page = 'results';
              this.state = state;

              if (this.after !== null) {
                this.after.innerHTML = '';
              }

              break;
          }
        },
        start: function start() {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].QUESTION;
          this.quiz.question = 1;
          this.page = 'question';
        },
        answer: function answer(data) {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].ANSWER;
          this.page = 'answer';
          this.quiz.answer = data.attributes.answer;
        },
        preview: function preview(file) {
          this.file = file;
          this.quiz.question = file;
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].PREVIEW;
          this.page = 'preview';
        }
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/quiz/js/QuizData.js":
/*!***************************************!*\
  !*** ./vendor/cl/quiz/js/QuizData.js ***!
  \***************************************/
/*! exports provided: QuizData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizData", function() { return QuizData; });
var QuizData = function QuizData() {};
/**
 * Get the form data for a question or preview. Validates that an answer is supplied
 *
 * @param vue Vue this is getting the form from
 * @returns FormData object or null if validation fails.
 */

QuizData.get = function (vue, mustProvideMessage) {
  var form = vue.$refs['form'];
  var formData = new FormData(form); // Validate all controls of class cl-answer-required as having input

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = form.querySelectorAll('input.cl-answer-required')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;
      // Validate that an answer has been supplied IF a form control
      // named cl-answer exists.
      var answer = formData.get(input.name);

      if (answer === null || answer === '') {
        if (mustProvideMessage !== undefined) {
          vue.$site.toast(vue, mustProvideMessage);
          return null;
        }

        switch (input.type) {
          case 'radio':
            vue.$site.toast(vue, 'You must choose an option');
            break;

          default:
            vue.$site.toast(vue, 'You must provide an answer');
            break;
        }

        return null;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return formData;
};

/***/ }),

/***/ "./vendor/cl/quiz/js/QuizFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/QuizFactory.js ***!
  \******************************************/
/*! exports provided: QuizFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizFactory", function() { return QuizFactory; });
/* harmony import */ var _Quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quiz */ "./vendor/cl/quiz/js/Quiz.js");

/**
 * The Quiz system factory
 * @constructor
 */

var QuizFactory = function QuizFactory() {};

QuizFactory.create = function (site) {
  var quiz = new _Quiz__WEBPACK_IMPORTED_MODULE_0__["Quiz"](site);
  site.start(function () {
    var element = document.querySelector('div.cl-quiz');

    if (element !== null) {
      quiz.initialize(element);
    }
  });
};

/***/ }),

/***/ "./vendor/cl/quiz/js/States.js":
/*!*************************************!*\
  !*** ./vendor/cl/quiz/js/States.js ***!
  \*************************************/
/*! exports provided: States */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
var States = function States() {};
States.INITIAL = 0;
States.START = 1;
States.QUESTION = 2;
States.RESULTS = 3;
States.PREVIEW = 4;

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
/* harmony import */ var _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answer.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('31200b40')) {
      api.createRecord('31200b40', component.options)
    } else {
      api.reload('31200b40', component.options)
    }
    module.hot.accept(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
(function () {
      api.rerender('31200b40', {
        render: _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Answer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Answer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Answer.vue?vue&type=template&id=31200b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
/* harmony import */ var _Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Closed.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3397150e')) {
      api.createRecord('3397150e', component.options)
    } else {
      api.reload('3397150e', component.options)
    }
    module.hot.accept(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
(function () {
      api.rerender('3397150e', {
        render: _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Closed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Closed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Closed.vue?vue&type=template&id=3397150e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
/* harmony import */ var _Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expired.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('163d0973')) {
      api.createRecord('163d0973', component.options)
    } else {
      api.reload('163d0973', component.options)
    }
    module.hot.accept(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
(function () {
      api.rerender('163d0973', {
        render: _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Expired.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Expired.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Expired.vue?vue&type=template&id=163d0973& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
/* harmony import */ var _Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initial.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('65449212')) {
      api.createRecord('65449212', component.options)
    } else {
      api.reload('65449212', component.options)
    }
    module.hot.accept(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
(function () {
      api.rerender('65449212', {
        render: _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Initial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Initial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Initial.vue?vue&type=template&id=65449212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('626b86d4')) {
      api.createRecord('626b86d4', component.options)
    } else {
      api.reload('626b86d4', component.options)
    }
    module.hot.accept(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
(function () {
      api.rerender('626b86d4', {
        render: _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=template&id=626b86d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
/* harmony import */ var _Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Previewer.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('baa0b97a')) {
      api.createRecord('baa0b97a', component.options)
    } else {
      api.reload('baa0b97a', component.options)
    }
    module.hot.accept(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
(function () {
      api.rerender('baa0b97a', {
        render: _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Previewer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Previewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Previewer.vue?vue&type=template&id=baa0b97a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue":
/*!********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
/* harmony import */ var _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('54140808')) {
      api.createRecord('54140808', component.options)
    } else {
      api.reload('54140808', component.options)
    }
    module.hot.accept(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
(function () {
      api.rerender('54140808', {
        render: _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Question.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Question.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Question.vue?vue&type=template&id=54140808& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
/* harmony import */ var _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('066e6478')) {
      api.createRecord('066e6478', component.options)
    } else {
      api.reload('066e6478', component.options)
    }
    module.hot.accept(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
(function () {
      api.rerender('066e6478', {
        render: _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Results.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=template&id=066e6478& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Fuc3dlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9DbG9zZWQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1F1ZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT8xZTMzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/YzU4NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP2U0ZjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT9jNTJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlPzhiZDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/ODg3OSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/YWU0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWU/N2ZkZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlldy52dWU/ZTMzNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZT83MmZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/NmU5ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUmVzdWx0cy52dWU/NGMxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlPzg0YzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT84OGE0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3M/MjE1ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT85MWQ3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWU/YTI0ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlPzM0NTEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpTdGF0dXNDb21wb25lbnQudnVlPzk4MTIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT82Y2Q4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/YTM0NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9RdWl6LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1F1aXpEYXRhLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1F1aXpGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1N0YXRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZT9iMGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlP2VmY2QiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/MmYyMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZT9mNDA0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZmZmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZTNiZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzc2YTkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzEwMzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT85MGFjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT9iNmQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlPzY0MjgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWU/NmQxMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/OTc2NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlP2M4OTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT84YzdhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT9mNzIzIl0sIm5hbWVzIjpbIlF1aXpGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJRdWl6Q29uc29sZSIsInNldHVwIiwiQ29uc29sZSIsInRhYmxlcyIsImFkZCIsInRpdGxlIiwib3JkZXIiLCJhcGkiLCJjb21wb25lbnRzIiwiYWRkUm91dGUiLCJyb3V0ZSIsImNvbXBvbmVudCIsIlF1aXpTdGF0dXNDb21wb25lbnQiLCJwcm9wcyIsIlF1aXpSZXN1bHRDb21wb25lbnQiLCJjb3Vyc2UiLCJhc3NpZ25tZW50TGluayIsIlF1aXoiLCJzaXRlIiwiaW5pdGlhbGl6ZSIsImVsZW1lbnQiLCJxdWl6IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJ0ZW1wbGF0ZSIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwiU3RhdGVzIiwiSU5JVElBTCIsInBhZ2UiLCJmaWxlIiwiYWZ0ZXIiLCJRdWl6VnVlIiwiUXVlc3Rpb25WdWUiLCJBbnN3ZXJWdWUiLCJFeHBpcmVkVnVlIiwiQ2xvc2VkVnVlIiwiUmVzdWx0c1Z1ZSIsIlByZXZpZXdlclZ1ZSIsIlByZXZpZXdWdWUiLCJtb3VudGVkIiwiZXhwaXJlZCIsImNsb3NlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJtZXRob2RzIiwibmV3U3RhdGUiLCJTVEFSVCIsInN0YXJ0IiwiUVVFU1RJT04iLCJxdWVzdGlvbiIsImxlbmd0aCIsIlJFU1VMVFMiLCJhbnN3ZXIiLCJBTlNXRVIiLCJhdHRyaWJ1dGVzIiwicHJldmlldyIsIlBSRVZJRVciLCJRdWl6RGF0YSIsImdldCIsInZ1ZSIsIm11c3RQcm92aWRlTWVzc2FnZSIsImZvcm0iLCIkcmVmcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJuYW1lIiwiJHNpdGUiLCJ0b2FzdCIsInR5cGUiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix3SEFBOEMsRUFBRTtBQUFBO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtGQUFNO0FBQ3RCLHlCQUF5QiwyRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlF1aXpcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVpelwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJlNjNiNmU0MDZhZDg4NmMxYTNiY1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiUXVpelwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9xdWl6L2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGluZz1cImZldGNoaW5nXCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWZldGNoaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtYWJvdXRcIj5cclxuICAgICAgICAgICAgPHA+PHNwYW4+Q291cnNlIE1lbWJlcjogPC9zcGFuPjxzcGFuPnt7dXNlci5uYW1lfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Bhbj5Bc3NpZ25tZW50OiA8L3NwYW4+PHNwYW4+e3thc3NpZ25tZW50Lm5hbWV9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuPlF1aXo6IDwvc3Bhbj48c3Bhbj57e3F1aXp0YWd9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+V2hlbiBUYWtlbjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkZpbmlzaGVkPzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInRyaWVkIGluIHRyaWVzXCIgOmNsYXNzPVwidHJpZWQudG9rZW4gPT09IHRva2VuID8gJ3NlbGVjdGVkJzonJ1wiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2suZGVmYXVsdD1cInNlbGVjdFRyeSh0cmllZC50b2tlbilcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3t0aW1lKHRyaWVkLnN0YXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3tlbGFwc2VkKHRyaWVkLnN0YXJ0LCB0cmllZC5lbmQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3RyaWVkLnBvaW50c319PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t0cmllZC5tYXhwb2ludHN9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiYW5zd2VycyAhPT0gbnVsbCAmJiBhbnN3ZXJzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNtYWxsIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Bc2tlZDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFuc3dlcmVkPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiYW5zIGluIGFuc3dlcnNcIiA6Y2xhc3M9XCJhbnN3ZXIgIT09IG51bGwgJiYgYW5zLm51bSA9PT0gYW5zd2VyLm51bSA/ICdzZWxlY3RlZCc6JydcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrLmRlZmF1bHQ9XCJzZWxlY3RBbnN3ZXIoYW5zLm51bSlcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3thbnMubnVtfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e2Fucy5wb2ludHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dGltZShhbnMucXVlc3Rpb250aW1lKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t0aW1lKGFucy5hbnN3ZXJ0aW1lKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJhbnN3ZXJzICE9PSBudWxsICYmIGFuc3dlcnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnkgY2VudGVyXCI+Tm8gYW5zd2VycyBwcm92aWRlZCBmb3IgdGhpcyBxdWl6IHRyeS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcXVpelwiIHYtaWY9XCJhbnN3ZXIgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDI+UXVlc3Rpb246IHt7YW5zd2VyLm51bX19IG9mIHt7YW5zd2Vycy5sZW5ndGh9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCIgdi1odG1sPVwiYW5zd2VyLnF1ZXN0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgzPlN0dWRlbnQgYW5zd2VyOjwvaDM+XHJcbiAgICAgICAgICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj57e2Fuc3dlci5zdHVkZW50YW5zd2VyfX08L3ByZT5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJhbnN3ZXIucmlnaHRhbnN3ZXIubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvcnJlY3QgYW5zd2VyOjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzPVwiY29kZVwiPnt7YW5zd2VyLnJpZ2h0YW5zd2VyfX08L3ByZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2ZldGNoZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgRmV0Y2hlclZ1ZSA9IFNpdGUuRmV0Y2hlclZ1ZTtcclxuXHJcblx0LypcclxuICBhbnN3ZXJ0aW1lXHJcbiAgbnVtXHJcbiAgcG9pbnRzXHJcbiAgcXVlc3Rpb25cclxuICBxdWVzdGlvbnRpbWVcclxuICByaWdodGFuc3dlclxyXG4gIHN0dWRlbnRhbnN3ZXJcclxuICB0b2tlblxyXG4gICAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiBbXHJcblx0XHRcdCdtZW1iZXJpZCcsICdhc3NpZ250YWcnLCAncXVpenRhZydcclxuXHRcdF0sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmV0Y2hpbmc6IHRydWUsXHJcblx0XHRcdFx0dXNlcjogbnVsbCxcclxuXHRcdFx0XHRzZWN0aW9uOiBudWxsLFxyXG5cdFx0XHRcdGFzc2lnbm1lbnQ6IG51bGwsXHJcblx0XHRcdFx0dHJpZXM6IG51bGwsXHJcblx0XHRcdFx0dG9rZW46IG51bGwsXHJcblx0XHRcdFx0YW5zd2VyczogbnVsbCxcclxuXHRcdFx0XHRhbnN3ZXI6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldGNoZXInOiBGZXRjaGVyVnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IFF1aXogUmVzdWx0Jyk7XHJcblxyXG5cdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoYC9hcGkvcXVpei9yZXN1bHQvJHt0aGlzLm1lbWJlcmlkfS8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMucXVpenRhZ31gLCB7fSlcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcnMuVXNlcihyZXNwb25zZS5nZXREYXRhKCdxdWl6LXVzZXInKS5hdHRyaWJ1dGVzKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbWVtYmVyID0gdGhpcy51c2VyLm1lbWJlcjtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcblx0XHRcdFx0XHRcdHRoaXMuYXNzaWdubWVudCA9IHRoaXMuc2VjdGlvbi5nZXRBc3NpZ25tZW50KHRoaXMuYXNzaWdudGFnKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMudHJpZXMgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXRyaWVzJykuYXR0cmlidXRlcztcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGFuc3dlcnMgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LWFuc3dlcnMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKGFuc3dlcnMgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRva2VuID0gYW5zd2Vycy5pZDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlcnMgPSBhbnN3ZXJzLmF0dHJpYnV0ZXM7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hbnN3ZXIgPSB0aGlzLmFuc3dlcnMubGVuZ3RoID4gMCA/IHRoaXMuYW5zd2Vyc1swXSA6IG51bGw7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2tlbiA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hbnN3ZXJzID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlciA9IG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZmV0Y2hpbmcgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHR0aW1lKHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodmFsdWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbGFwc2VkKHN0YXJ0LCBlbmQpIHtcclxuXHRcdFx0XHRpZiAoZW5kID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IGRpZmYgPSBlbmQgLSBzdGFydDtcclxuXHRcdFx0XHRjb25zdCBtaW4gPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XHJcblx0XHRcdFx0Y29uc3Qgc2VjID0gZGlmZiAlIDYwO1xyXG5cdFx0XHRcdHJldHVybiAnJyArIG1pbiArICc6JyArIChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0VHJ5KHRva2VuKSB7XHJcblx0XHRcdFx0Ly90aGlzLmZldGNoaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcmVzdWx0L3Rva2VuLyR7dG9rZW59YCwge30pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25zdCBhbnN3ZXJzID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1hbnN3ZXJzJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGFuc3dlcnMgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYW5zd2VycyA9IGFuc3dlcnMuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYW5zd2VyID0gdGhpcy5hbnN3ZXJzLmxlbmd0aCA+IDAgPyB0aGlzLmFuc3dlcnNbMF0gOiBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlcnMgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hbnN3ZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mZXRjaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0QW5zd2VyKG51bSkge1xyXG5cdFx0XHRcdHRoaXMuYW5zd2VyID0gdGhpcy5hbnN3ZXJzW251bSAtIDFdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgZGl2LmNsLWFib3V0IHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHRyOmZpcnN0LWNoaWxkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHRyLnNlbGVjdGVkIHtcclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXIgOmZldGNoaW5nPVwicmVzdWx0cyA9PT0gbnVsbFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwic21hbGxcIiB2LWZvcj1cInRhZyBpbiBxdWl6VGFnc1wiPnt7dGFnfX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRkID57e3VzZXIudXNlcklkfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJ0YWcgaW4gcXVpelRhZ3NcIj57e3N0YXR1cyh1c2VyLCB0YWcpfX1cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJsaW5rKHVzZXIsIHRhZylcIiB2LWlmPVwicXVpelJlc3VsdCh1c2VyLCB0YWcpIT09bnVsbFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9leWUxNi5wbmcnXCI+PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPnt7dG90YWwodXNlcil9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyc2ZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cdCAgICAnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gICAgICAgIHByb3BzOiBbJ2Fzc2lnbnRhZyddLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcXVpelRhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBleWU6IFNpdGUucm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2V5ZTE2LnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBwcm9jZXNzKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29sbGVjdCB1cCB0aGUgcXVpeiB0YWdzXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IG1lbWJlciBpbiByZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBxdWl6VGFnIGluIHJlc3VsdHNbbWVtYmVyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnF1aXpUYWdzLmluZGV4T2YocXVpelRhZykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpUYWdzLnB1c2gocXVpelRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXModXNlciwgdGFnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnF1aXpSZXN1bHQodXNlciwgdGFnKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJycgKyByZXN1bHQucG9pbnRzICsgJy8nICsgcmVzdWx0Lm1heHBvaW50cztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG90YWwodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZXN1bHRzID09PSBudWxsIHx8IHRoaXMuYXNzaWdubWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdGFnIG9mIHRoaXMucXVpelRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnF1aXpSZXN1bHQodXNlciwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9ICtyZXN1bHQucG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAnJyArIHN1bSArICcvJyArIHRoaXMuYXNzaWdubWVudC5xdWl6O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR0V0IGEgcXVpeiByZXN1bHQgZm9yIGEgdXNlciBpZiBvbmUgZXhpc3RzLCBvdGhlcndpc2UgcmV0dXJuIG51bGwuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB1c2VyIFVzZXIgb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0YWcgcXVpeiB0YWdcclxuICAgICAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBxdWl6UmVzdWx0KHVzZXIsIHRhZykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZXN1bHRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZXN1bHRzW3VzZXIuaWRdICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHNbdXNlci5pZF1bdGFnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRzW3VzZXIuaWRdW3RhZ107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluayh1c2VyLCB0YWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtTaXRlLnJvb3R9L2NsL2NvbnNvbGUvcXVpei9yZXN1bHQvJHt1c2VyLm1lbWJlci5pZH0vJHt0aGlzLmFzc2lnbm1lbnQudGFnfS8ke3RhZ31gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdtZW1iZXJzZmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyLm1lbWJlcjtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFF1aXogU3RhdHVzJyk7XHJcblxyXG4gICAgICAgICAgICBTaXRlLmFwaS5nZXQoJy9hcGkvcXVpei9hbGwvJyArIHRoaXMuYXNzaWdudGFnLCBxdWVyeSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1yZXN1bHRzLWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3MoZGF0YS5hdHRyaWJ1dGVzLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxudGFibGUge1xyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRkOm50aC1jaGlsZCgxKSwgIHRkOm50aC1jaGlsZCgyKSwgIHRkOm50aC1jaGlsZCgzKSwgIHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxoMiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UXVlc3Rpb24ge3txdWl6LnF1ZXN0aW9ufX0gb2Yge3txdWl6Lmxlbmd0aH19PC9oMj5cclxuICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICA8ZGl2IHYtaHRtbD1cInF1aXouYW5zd2VyXCI+PC9kaXY+XHJcbiAgICAgICAgPHAgdi1pZj1cInF1aXoucXVlc3Rpb24gPCBxdWl6Lmxlbmd0aFwiPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk5leHQgUXVlc3Rpb248L2J1dHRvbj48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDxkaXYgdi1pZj1cInF1aXoucXVlc3Rpb24gPj0gcXVpei5sZW5ndGhcIj5cclxuICAgICAgPHAgY2xhc3M9XCJkb25lXCI+VGhpcyBRdWl6IGlzIENvbXBsZXRlPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImNlbnRlclwiPllvdSBtYXkgPGEgQGNsaWNrLnByZXZlbnQ9XCJyZXRha2VcIj5yZXRha2UgdGhlIHF1aXo8L2E+IGlmIHlvdSB3aXNoPC9wPlxyXG4gICAgICA8cmVzdWx0cyA6cXVpej1cInF1aXpcIj48L3Jlc3VsdHM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge1N0YXRlc30gZnJvbSAnLi4vU3RhdGVzJztcclxuICAgIGltcG9ydCBSZXN1bHRzVnVlIGZyb20gJy4vUmVzdWx0cy52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAgICdxdWl6J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAncmVzdWx0cyc6IFJlc3VsdHNWdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6LnF1ZXN0aW9uIDwgdGhpcy5xdWl6Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5RVUVTVElPTik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldGFrZSgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IGNvbXAgY2VudGVyXCI+VGhlIHF1aXogaXMgY2xvc2VkIGFuZCBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZS48L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAncXVpeidcclxuICAgICAgXVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IGNvbXBcIj5UaGUgcXVpeiBoYXMgZXhwaXJlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB0YWtlbi4gUXVpenplcyBleHBpcmUgYXQgdGhlIHRpbWVcclxuICAgICAgdGhlIGFzc2lnbm1lbnQgaXMgZHVlLiA8L3A+XHJcbiAgICA8cD5Zb3UgY2FuIHByb2NlZWQgdGhyb3VnaCB0aGUgcXVpeiBmb3IgcHJhY3RpY2UgcHVycG9zZXMsIGJ1dCBuZXcgZ3JhZGVzIGFuZFxyXG4gICAgICBzdWJtaXNzaW9ucyB3aWxsIG5vdCBiZSBwb3NzaWJsZS48L3A+XHJcblxyXG4gICAgPHA+V2hlbiByZWFkeSwgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicHJvY2VlZCgpXCI+Y2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei48L2E+IFlvdSBjYW4gYWxzb1xyXG4gICAgICA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJyZXN1bHRzKClcIj5qdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLjwvYT48L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAncXVpeidcclxuICAgICAgXSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgcHJvY2VlZCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuU1RBUlQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlc3VsdHMoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LXN0YXRlJywgU3RhdGVzLlJFU1VMVFMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWh0bWw9XCJxdWl6LnNwbGFzaFwiPjwvZGl2PlxyXG5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyXCIgdi1pZj1cInF1aXoubGlnaHRuaW5nID09PSBudWxsXCI+VGhpcyBxdWl6IGhhcyBubyBzcGVjaWZpZWQgdGltZSBsaW1pdC48L3A+XHJcbiAgICA8cCB2LWlmPVwicXVpei5saWdodG5pbmcgIT09IG51bGxcIiBjbGFzcz1cImNlbnRlcmJveCBzZWNvbmRhIGNlbnRlclwiPlRoaXMgaXMgYSBsaWdodG5pbmcgcXVpei5cclxuICAgICAgWW91IGhhdmUge3txdWl6LmxpZ2h0bmluZ319IHNlY29uZHMgdG8gYW5zd2VyIGVhY2ggcXVlc3Rpb24uPC9wPlxyXG5cclxuICAgIDxwPldoZW4gcmVhZHksIDxhIHYtb246Y2xpY2sucHJldmVudD1cInByb2NlZWQoKVwiPmNsaWNrIHRvIHByb2NlZWQgdG8gdGhlIHF1aXouPC9hPiBZb3UgY2FuIGFsc29cclxuICAgICAgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicmVzdWx0cygpXCI+anVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy48L2E+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1N0YXRlc30gZnJvbSAnLi4vU3RhdGVzJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogW1xyXG4gICAgICAgICAgJ3F1aXonXHJcbiAgICAgIF0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHByb2NlZWQoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LXN0YXRlJywgU3RhdGVzLlNUQVJUKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXN1bHRzKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5SRVNVTFRTKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cclxuICAgIDxkaXYgdi1pZj1cInF1ZXN0aW9uIT09bnVsbFwiPlxyXG4gICAgICA8cCBjbGFzcz1cInByZXZpZXdcIiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UHJldmlldyBvZiB7e3F1aXoucXVlc3Rpb259fS4gQXZhaWxhYmxlIHRvIHN0YWZmIG9ubHkuPC9wPlxyXG4gICAgICA8Zm9ybSByZWY9XCJmb3JtXCIgbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF1ZXN0aW9uLXRpbWVcIiA6dmFsdWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJxdWVzdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDxwPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPjwvcD5cclxuICAgICAgICA8aHI+XHJcblxyXG4gICAgICAgIDxoMyB2LWlmPVwiYW5zd2Vycy5sZW5ndGggPiAwXCI+QW5zd2VyczwvaDM+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cImFuc3dlciBpbiBhbnN3ZXJzXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cImFuc3dlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImNvbW1lbnQgIT09IG51bGxcIj5cclxuICAgICAgICAgIDxoMz5Db21tZW50PC9oMz5cclxuICAgICAgICAgIDxkaXYgdi1odG1sPVwiY29tbWVudFwiIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnlcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtRdWl6RGF0YX0gZnJvbSAnLi4vUXVpekRhdGEnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICBtdXN0UHJvdmlkZU1lc3NhZ2U6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeicsXHJcbiAgICAgICAgICAgICdmaWxlJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgZmlsZShuZXdRdWl6LCBvbGRRdWl6KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7ZmlsZTogdGhpcy5maWxlfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS9xdWl6L3ByZXZpZXcvJHt0aGlzLnF1aXoudG9rZW59YCwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1xdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLmF0dHJpYnV0ZXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gZGF0YS5hdHRyaWJ1dGVzLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ID0gZGF0YS5hdHRyaWJ1dGVzLmNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gZGF0YS5hdHRyaWJ1dGVzLmFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXN0UHJvdmlkZU1lc3NhZ2UgPSBkYXRhLmF0dHJpYnV0ZXMubXVzdFByb3ZpZGVNZXNzYWdlO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1xdWl6LWFmdGVyJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyLmlubmVySFRNTCA9IGRhdGEuYXR0cmlidXRlcy5hZnRlcjtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuVnVlLm5leHRUaWNrKCgpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUubWVzc2FnZSgnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2NlZWQoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIFx0Y29uc3QgZm9ybURhdGEgPSBRdWl6RGF0YS5nZXQodGhpcywgdGhpcy5tdXN0UHJvdmlkZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwcmV2aWV3ZXJcIj5cclxuICAgIDxoMj5TdGFmZiBRdWVzdGlvbiBQcmV2aWV3czwvaDI+XHJcbiAgICA8cD5UaGVzZSBsaW5rcyBhbGxvdyB5b3UgdG8gcHJldmlldyBxdWl6IHF1ZXN0aW9ucy4gSWYgdGhlIHF1ZXN0aW9uIGlzIHJhbmRvbWx5IHNlbGVjdGVkXHJcbiAgICAgIGZyb20gbXVsdGlwbGUgZmlsZXMsIHRoZSBmaWxlcyBhcHBlYXIgYmVsb3cgdGhlIHF1ZXN0aW9uLiA8c3BhbiBjbGFzcz1cInNtYWxscmVkXCI+VGhpcyBwYXJ0IG9mIHRoZSBwYWdlIGFwcGVhcnMgZm9yXHJcbnN0YWZmIG1lbWJlcnMgb25seS48L3NwYW4+PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwicXVlc3Rpb24gaW4gcHJldmlld3NcIiA6a2V5PVwicXVlc3Rpb24ubnVtXCI+XHJcbiAgICAgICAgPGgzPlF1ZXN0aW9uIHt7cXVlc3Rpb24ubnVtfX08L2gzPlxyXG4gICAgICAgIDx1bCB2LWlmPVwicXVlc3Rpb24uZmlsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiZmlsZSBpbiBxdWVzdGlvbi5maWxlc1wiPjxhIEBjbGljay5wcmV2ZW50PVwicHJldmlldyhmaWxlKVwiPnt7ZmlsZX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeidcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld3M6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucXVpei5wcmV2aWV3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgbnVtOiBpKzEsXHJcbiAgICAgICAgICAgICAgICAgIGZpbGVzOiB0aGlzLnF1aXoucHJldmlld1tpXVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHByZXZpZXcoZmlsZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCBmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJxdWVzdGlvbiE9PW51bGxcIj5cclxuICAgICAgPGgyIHYtaWY9XCJxdWl6Lmxlbmd0aCA+IDFcIj5RdWVzdGlvbiB7e3F1aXoucXVlc3Rpb259fSBvZiB7e3F1aXoubGVuZ3RofX08L2gyPlxyXG4gICAgICA8Zm9ybSByZWY9XCJmb3JtXCIgbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF1ZXN0aW9uLXRpbWVcIiA6dmFsdWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJxdWVzdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDxwPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7UXVpekRhdGF9IGZyb20gJy4uL1F1aXpEYXRhJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgbXVzdFByb3ZpZGVNZXNzYWdlOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgJ3F1aXonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KGAvYXBpL3F1aXovcXVlc3Rpb24vJHt0aGlzLnF1aXoudG9rZW59LyR7dGhpcy5xdWl6LnF1ZXN0aW9ufWAsIHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcXVlc3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLmF0dHJpYnV0ZXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBkYXRhLmF0dHJpYnV0ZXMudGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVzdFByb3ZpZGVNZXNzYWdlID0gZGF0YS5hdHRyaWJ1dGVzLm11c3RQcm92aWRlTWVzc2FnZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1xdWl6LWFmdGVyJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZihhZnRlciAhPT0gbnVsbCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBhZnRlci5pbm5lckhUTUwgPSBkYXRhLmF0dHJpYnV0ZXMuYWZ0ZXI7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5WdWUubmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLm1lc3NhZ2UoJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJywgbnVsbCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcHJvY2VlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcclxuXHQgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IFF1aXpEYXRhLmdldCh0aGlzLCB0aGlzLm11c3RQcm92aWRlTWVzc2FnZSk7XHJcblx0ICAgICAgICAgICAgaWYoZm9ybURhdGEgPT09IG51bGwpIHtcclxuXHQgICAgICAgICAgICBcdHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvcXVpei9hbnN3ZXIvJHt0aGlzLnF1aXoudG9rZW59LyR7dGhpcy5xdWl6LnF1ZXN0aW9ufWAsIGZvcm1EYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1hbnN3ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Fuc3dlcicsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXJlc3VsdHNcIj5cclxuICAgIDxkaXYgdi1pZj1cInRyaWVzICE9PSBudWxsICYmIHRyaWVzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPHA+WW91ciBjdXJyZW50IGJlc3Qgc2NvcmUgZm9yIHRoaXMgcXVpeiBpcyB7e2hpZ2h9fS97e3F1aXoucG9pbnRzfX0uIFRoZSBzeXN0ZW0gcmV0YWlucyB5b3VyIGJlc3RcclxuICAgICAgICByZXN1bHQgYXMgeW91ciBncmFkZSBmb3IgYSBxdWl6LjwvcD5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGwgY2VudGVyXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+V2hlbiBUYWtlbjwvdGg+XHJcbiAgICAgICAgICA8dGg+RmluaXNoZWQ/PC90aD5cclxuICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidHJpZWQgaW4gdHJpZXNcIiA6Y2xhc3M9XCJoaWdoID4gMCAmJiB0cmllZC5wb2ludHMgPT09IGhpZ2ggPyAnYmVzdCcgOiAnJ1wiPlxyXG4gICAgICAgICAgPHRkPnt7dGltZSh0cmllZC5zdGFydCl9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tlbGFwc2VkKHRyaWVkLnN0YXJ0LCB0cmllZC5lbmQpfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7dHJpZWQucG9pbnRzfX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPGNhcHRpb24+UmVzdWx0cyBmb3IgUXVpejwvY2FwdGlvbj5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHA+SWYgYSB2YWx1ZSBpcyBpbmRpY2F0ZWQgaW4gdGhlIEZpbmlzaGVkPyBjb2x1bW4sIHRoZSBxdWl6XHJcbiAgICAgIHdhcyBjb21wbGV0ZWQgaW4gdGhhdCBhbW91bnQgb2YgdGltZSAoaW4gbWludXRlcyBhbmQgc2Vjb25kcykuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5IGNlbnRlclwiIHYtaWY9XCJ0cmllcyAhPT0gbnVsbCAmJiB0cmllcy5sZW5ndGggPT09IDBcIj5Zb3UgaGF2ZSBub3QgeWV0IGNvbXBsZXRlZCB0aGUgcXVpeiwgeWV0LCBzbyB5b3UgZG8gbm90IGhhdmUgYSBzY29yZS48L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogW1xyXG5cdFx0XHQncXVpeidcclxuXHRcdF0sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dHJpZXM6IG51bGwsXHJcblx0XHRcdFx0aGlnaDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcmVzdWx0cy8ke3RoaXMucXVpei5hc3NpZ250YWd9LyR7dGhpcy5xdWl6LnF1aXp0YWd9YCwge30pXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXJlc3VsdHMnKTtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmllcyA9IGRhdGEuYXR0cmlidXRlcy50cmllcztcclxuXHRcdFx0XHRcdFx0dGhpcy5oaWdoID0gMDtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgdHJpZWQgb2YgdGhpcy50cmllcykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgrdHJpZWQucG9pbnRzID4gK3RoaXMuaGlnaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWdoID0gdHJpZWQucG9pbnRzO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHR0aW1lKHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodmFsdWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdGVsYXBzZWQoc3RhcnQsIGVuZCkge1xyXG5cdFx0XHRcdGlmIChlbmQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgZGlmZiA9IGVuZCAtIHN0YXJ0O1xyXG5cdFx0XHRcdGNvbnN0IG1pbiA9IE1hdGguZmxvb3IoZGlmZiAvIDYwKTtcclxuXHRcdFx0XHRjb25zdCBzZWMgPSBkaWZmICUgNjA7XHJcblx0XHRcdFx0cmV0dXJuICcnICsgbWluICsgJzonICsgKHNlYyA8IDEwID8gJzAnIDogJycpICsgc2VjO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXF1aXoge1xcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYzsgfVxcblxcbmRpdi5jbC1xdWl6IHtcXG4gIGJvcmRlcjogc29saWQgI2NjY2NjYyAxcHQ7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgbWluLWhlaWdodDogMTVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNlY2ZmZWY7IH1cXG4gIGRpdi5jbC1xdWl6ID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi5jbC1xdWl6ID4gZGl2LmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICBkaXYuY2wtcXVpeiBkaXYuY2wtcmVzdWx0cyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvOyB9XFxuICBkaXYuY2wtcXVpeiBoMiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTRweDsgfVxcbiAgZGl2LmNsLXF1aXogZGl2LmNsLW11bHRpIHtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgcGFkZGluZzogMCAwIDAgM2VtOyB9XFxuICAgIGRpdi5jbC1xdWl6IGRpdi5jbC1tdWx0aSBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gIGRpdi5jbC1xdWl6IHAuZG9uZSB7XFxuICAgIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYuY2wtcXVpeiBidXR0b24ge1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgZGl2LmNsLXF1aXogdHIuYmVzdCB0ZCB7XFxuICAgIGJhY2tncm91bmQ6ICNkZGU7IH1cXG4gIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAgIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIgaDMge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDEuMmVtOyB9XFxuICAgIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIgdWwge1xcbiAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IHtcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7IH1cXG4gICAgZGl2LmNsLXF1aXogZGl2LnByZXZpZXcgaHIge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICBkaXYuY2wtcXVpeiBkaXYucHJldmlldyBoMyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IHAucHJldmlldyB7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgfVxcbiAgZGl2LmNsLXF1aXogcC5jbC1xdWl6LWFuc3dlci1ub3RlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjODAwOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI3F1aXoge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfSB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWFib3V0W2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5kaXYuY2wtYWJvdXQgcFtkYXRhLXYtZDk4MTE0MmNdIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5kaXYuY2wtYWJvdXQgcCBzcGFuW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuZGl2LmNsLWFib3V0IHAgc3BhbltkYXRhLXYtZDk4MTE0MmNdOmZpcnN0LWNoaWxkIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcbnRyW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG50cltkYXRhLXYtZDk4MTE0MmNdOmZpcnN0LWNoaWxkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxudHIuc2VsZWN0ZWQgdGRbZGF0YS12LWQ5ODExNDJjXSB7XFxuICBiYWNrZ3JvdW5kOiAjODhmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJsZSB0ZFtkYXRhLXYtYzI2OGRmOTZdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxudGFibGUgdGRbZGF0YS12LWMyNjhkZjk2XTpudGgtY2hpbGQoMSksIHRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDIpLCB0YWJsZSB0ZFtkYXRhLXYtYzI2OGRmOTZdOm50aC1jaGlsZCgzKSwgdGFibGUgdGRbZGF0YS12LWMyNjhkZjk2XTpudGgtY2hpbGQoNCkge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZmV0Y2hlclwiLCB7IGF0dHJzOiB7IGZldGNoaW5nOiBfdm0uZmV0Y2hpbmcgfSB9LCBbXG4gICAgICAgICAgIV92bS5mZXRjaGluZ1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hYm91dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQ291cnNlIE1lbWJlcjogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBc3NpZ25tZW50OiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hc3NpZ25tZW50Lm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlF1aXo6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnF1aXp0YWcpKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXaGVuIFRha2VuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGaW5pc2hlZD9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBvaW50c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWF4XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udHJpZXMsIGZ1bmN0aW9uKHRyaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogdHJpZWQudG9rZW4gPT09IF92bS50b2tlbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RUcnkodHJpZWQudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aW1lKHRyaWVkLnN0YXJ0KSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0cmllZC5wb2ludHMpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRyaWVkLm1heHBvaW50cykpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYW5zd2VycyAhPT0gbnVsbCAmJiBfdm0uYW5zd2Vycy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFza2VkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFuc3dlcmVkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5zd2VycywgZnVuY3Rpb24oYW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hbnN3ZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zLm51bSA9PT0gX3ZtLmFuc3dlci5udW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdEFuc3dlcihhbnMubnVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGFucy5udW0pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYW5zLnBvaW50cykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpbWUoYW5zLnF1ZXN0aW9udGltZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpbWUoYW5zLmFuc3dlcnRpbWUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmFuc3dlcnMgIT09IG51bGwgJiYgX3ZtLmFuc3dlcnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBhbnN3ZXJzIHByb3ZpZGVkIGZvciB0aGlzIHF1aXogdHJ5LlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmFuc3dlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXF1aXpcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlF1ZXN0aW9uOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFuc3dlci5udW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYW5zd2Vycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiU3R1ZGVudCBhbnN3ZXI6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIuc3R1ZGVudGFuc3dlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYW5zd2VyLnJpZ2h0YW5zd2VyLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJDb3JyZWN0IGFuc3dlcjpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5yaWdodGFuc3dlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmV0Y2hpbmc6IF92bS5yZXN1bHRzID09PSBudWxsIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucXVpelRhZ3MsIGZ1bmN0aW9uKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5xdWl6VGFncywgZnVuY3Rpb24odGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3RhdHVzKHVzZXIsIHRhZykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVpelJlc3VsdCh1c2VyLCB0YWcpICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ubGluayh1c2VyLCB0YWcpIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2V5ZTE2LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsKHVzZXIpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ucXVpei5sZW5ndGggPiAxXG4gICAgICA/IF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiUXVlc3Rpb24gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoubGVuZ3RoKVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5xdWl6LmFuc3dlcikgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnF1aXoucXVlc3Rpb24gPCBfdm0ucXVpei5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXh0IFF1ZXN0aW9uXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnF1aXoucXVlc3Rpb24gPj0gX3ZtLnF1aXoubGVuZ3RoXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZG9uZVwiIH0sIFtfdm0uX3YoXCJUaGlzIFF1aXogaXMgQ29tcGxldGVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIllvdSBtYXkgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJldGFrZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJyZXRha2UgdGhlIHF1aXpcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBpZiB5b3Ugd2lzaFwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJyZXN1bHRzXCIsIHsgYXR0cnM6IHsgcXVpejogX3ZtLnF1aXogfSB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiVGhlIHF1aXogaXMgY2xvc2VkIGFuZCBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZS5cIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcXVpeiBoYXMgZXhwaXJlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB0YWtlbi4gUXVpenplcyBleHBpcmUgYXQgdGhlIHRpbWVcXG4gICAgdGhlIGFzc2lnbm1lbnQgaXMgZHVlLiBcIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJZb3UgY2FuIHByb2NlZWQgdGhyb3VnaCB0aGUgcXVpeiBmb3IgcHJhY3RpY2UgcHVycG9zZXMsIGJ1dCBuZXcgZ3JhZGVzIGFuZFxcbiAgICBzdWJtaXNzaW9ucyB3aWxsIG5vdCBiZSBwb3NzaWJsZS5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIldoZW4gcmVhZHksIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei5cIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcImp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucXVpei5zcGxhc2gpIH0gfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucXVpei5saWdodG5pbmcgPT09IG51bGxcbiAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlRoaXMgcXVpeiBoYXMgbm8gc3BlY2lmaWVkIHRpbWUgbGltaXQuXCIpXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnF1aXoubGlnaHRuaW5nICE9PSBudWxsXG4gICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBzZWNvbmRhIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBsaWdodG5pbmcgcXVpei5cXG4gICAgWW91IGhhdmUgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoubGlnaHRuaW5nKSArXG4gICAgICAgICAgICAgIFwiIHNlY29uZHMgdG8gYW5zd2VyIGVhY2ggcXVlc3Rpb24uXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIldoZW4gcmVhZHksIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei5cIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcImp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIiB9LCBbXG4gICAgX3ZtLnF1ZXN0aW9uICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0ucXVpei5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6LnF1ZXN0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgIFwiLiBBdmFpbGFibGUgdG8gc3RhZmYgb25seS5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInF1ZXN0aW9uLXRpbWVcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGltZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5xdWVzdGlvbikgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uYW5zd2Vycy5sZW5ndGggPiAwID8gX2MoXCJoM1wiLCBbX3ZtLl92KFwiQW5zd2Vyc1wiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uYW5zd2VycywgZnVuY3Rpb24oYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoYW5zd2VyKSB9IH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jb21tZW50ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkNvbW1lbnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNvbW1lbnQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld2VyXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlN0YWZmIFF1ZXN0aW9uIFByZXZpZXdzXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgIF92bS5fbChfdm0ucHJldmlld3MsIGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogcXVlc3Rpb24ubnVtIH0sIFtcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJRdWVzdGlvbiBcIiArIF92bS5fcyhxdWVzdGlvbi5udW0pKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgcXVlc3Rpb24uZmlsZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKHF1ZXN0aW9uLmZpbGVzLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldmlldyhmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhmaWxlKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlRoZXNlIGxpbmtzIGFsbG93IHlvdSB0byBwcmV2aWV3IHF1aXogcXVlc3Rpb25zLiBJZiB0aGUgcXVlc3Rpb24gaXMgcmFuZG9tbHkgc2VsZWN0ZWRcXG4gICAgICBmcm9tIG11bHRpcGxlIGZpbGVzLCB0aGUgZmlsZXMgYXBwZWFyIGJlbG93IHRoZSBxdWVzdGlvbi4gXCJcbiAgICAgICksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbHJlZFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiVGhpcyBwYXJ0IG9mIHRoZSBwYWdlIGFwcGVhcnMgZm9yXFxuc3RhZmYgbWVtYmVycyBvbmx5LlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5xdWVzdGlvbiAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX3ZtLnF1aXoubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlF1ZXN0aW9uIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6LnF1ZXN0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6Lmxlbmd0aClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJxdWVzdGlvbi10aW1lXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRpbWUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucXVlc3Rpb24pIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1yZXN1bHRzXCIgfSwgW1xuICAgIF92bS50cmllcyAhPT0gbnVsbCAmJiBfdm0udHJpZXMubGVuZ3RoID4gMFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJZb3VyIGN1cnJlbnQgYmVzdCBzY29yZSBmb3IgdGhpcyBxdWl6IGlzIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmhpZ2gpICtcbiAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6LnBvaW50cykgK1xuICAgICAgICAgICAgICAgIFwiLiBUaGUgc3lzdGVtIHJldGFpbnMgeW91ciBiZXN0XFxuICAgICAgcmVzdWx0IGFzIHlvdXIgZ3JhZGUgZm9yIGEgcXVpei5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50cmllcywgZnVuY3Rpb24odHJpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5oaWdoID4gMCAmJiB0cmllZC5wb2ludHMgPT09IF92bS5oaWdoID8gXCJiZXN0XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aW1lKHRyaWVkLnN0YXJ0KSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCkpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0cmllZC5wb2ludHMpKV0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJjYXB0aW9uXCIsIFtfdm0uX3YoXCJSZXN1bHRzIGZvciBRdWl6XCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiSWYgYSB2YWx1ZSBpcyBpbmRpY2F0ZWQgaW4gdGhlIEZpbmlzaGVkPyBjb2x1bW4sIHRoZSBxdWl6XFxuICAgIHdhcyBjb21wbGV0ZWQgaW4gdGhhdCBhbW91bnQgb2YgdGltZSAoaW4gbWludXRlcyBhbmQgc2Vjb25kcykuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS50cmllcyAhPT0gbnVsbCAmJiBfdm0udHJpZXMubGVuZ3RoID09PSAwXG4gICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5IGNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIllvdSBoYXZlIG5vdCB5ZXQgY29tcGxldGVkIHRoZSBxdWl6LCB5ZXQsIHNvIHlvdSBkbyBub3QgaGF2ZSBhIHNjb3JlLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW192bS5fdihcIldoZW4gVGFrZW5cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGaW5pc2hlZD9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQb2ludHNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ODExNDJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYzgxODM1YzBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ODExNDJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNjhkZjk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjY2MDQ3NzBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNjhkZjk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19xdWl6LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2JhYzAxZmVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19xdWl6LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vX3F1aXouc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBtYWluIFF1aXogZW50cnkgcG9pbnRcclxuICovXHJcblxyXG5pbXBvcnQge1F1aXpGYWN0b3J5fSBmcm9tIFwiLi9qcy9RdWl6RmFjdG9yeVwiO1xyXG5pbXBvcnQge1F1aXpDb25zb2xlfSBmcm9tICcuL2pzL0NvbnNvbGUvUXVpekNvbnNvbGUnO1xyXG5cclxuLy9cclxuLy8gQ3JlYXRlIHRoZSBRdWl6IGNvbXBvbmVudHNcclxuLy9cclxuUXVpekZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcblxyXG4vL1xyXG4vLyBJbnN0YWxsIHRoZSBjb25zb2xlIGNvbXBvbmVudHNcclxuLy9cclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFF1aXpDb25zb2xlLnNldHVwKFNpdGUuU2l0ZS5jb25zb2xlKTtcclxufVxyXG4iLCJcclxuaW1wb3J0IFF1aXpTdGF0dXNDb21wb25lbnQgZnJvbSAnLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBRdWl6UmVzdWx0Q29tcG9uZW50IGZyb20gJy4vUXVpelJlc3VsdENvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFF1aXogc3lzdGVtIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgUXVpekNvbnNvbGUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuUXVpekNvbnNvbGUuc2V0dXAgPSBmdW5jdGlvbihDb25zb2xlKSB7XHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnUXVpeicsXHJcbiAgICAgICAgb3JkZXI6IDYwLFxyXG4gICAgICAgIGFwaTogJy9hcGkvcXVpei90YWJsZXMnXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGUoXHJcbiAgICAgICAge3JvdXRlOiAnL3F1aXovcmVzdWx0cy86YXNzaWdudGFnJywgY29tcG9uZW50OiBRdWl6U3RhdHVzQ29tcG9uZW50LCBwcm9wczogdHJ1ZX1cclxuICAgICk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlKFxyXG4gICAgICAgIHtyb3V0ZTogJy9xdWl6L3Jlc3VsdC86bWVtYmVyaWQvOmFzc2lnbnRhZy86cXVpenRhZycsIGNvbXBvbmVudDogUXVpelJlc3VsdENvbXBvbmVudCwgcHJvcHM6IHRydWV9XHJcbiAgICApO1xyXG5cclxuICAgIENvbnNvbGUuY291cnNlLmFzc2lnbm1lbnRMaW5rKCdxdWl6JywgJ3F1aXp6ZXMnLCAnL3F1aXovcmVzdWx0cy86YXNzaWdudGFnJyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDk4MTE0MmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkOTgxMTQyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDk4MTE0MmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q5ODExNDJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTgxMTQyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjY4ZGY5NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjY4ZGY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyNjhkZjk2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjY4ZGY5NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjY4ZGY5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjY4ZGY5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI2OGRmOTYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI2OGRmOTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNjhkZjk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjY4ZGY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI2OGRmOTYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgJy4uL19xdWl6LnNjc3MnO1xyXG5pbXBvcnQgUXVpelZ1ZSBmcm9tICcuL1Z1ZS9Jbml0aWFsLnZ1ZSc7XHJcbmltcG9ydCBRdWVzdGlvblZ1ZSBmcm9tICcuL1Z1ZS9RdWVzdGlvbi52dWUnO1xyXG5pbXBvcnQgQW5zd2VyVnVlIGZyb20gJy4vVnVlL0Fuc3dlci52dWUnO1xyXG5pbXBvcnQgRXhwaXJlZFZ1ZSBmcm9tICcuL1Z1ZS9FeHBpcmVkLnZ1ZSc7XHJcbmltcG9ydCBDbG9zZWRWdWUgZnJvbSAnLi9WdWUvQ2xvc2VkLnZ1ZSc7XHJcbmltcG9ydCBSZXN1bHRzVnVlIGZyb20gJy4vVnVlL1Jlc3VsdHMudnVlJztcclxuaW1wb3J0IFByZXZpZXdlclZ1ZSBmcm9tICcuL1Z1ZS9QcmV2aWV3ZXIudnVlJztcclxuaW1wb3J0IFByZXZpZXdWdWUgZnJvbSAnLi9WdWUvUHJldmlldy52dWUnO1xyXG5cclxuaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4vU3RhdGVzJztcclxuXHJcbi8qKlxyXG4gKiBRdWl6IHByZXNlbnRhdGlvbiBWdWVcclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFF1aXogPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBxdWl6ID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBgXHJcbjxkaXYgY2xhc3M9XCJjbC1xdWl6XCI+XHJcbiAgPGNvbXBvbmVudCA6aXM9XCJwYWdlXCIgOnF1aXo9XCJxdWl6XCIgOmZpbGU9XCJmaWxlXCIgdi1vbjphbnN3ZXI9XCJhbnN3ZXIoJGV2ZW50KVwiIHYtb246bmV3LXN0YXRlPVwibmV3U3RhdGUoJGV2ZW50KVwiPjwvY29tcG9uZW50PlxyXG4gIDxwcmV2aWV3ZXIgdi1pZj1cInF1aXoucHJldmlldyAhPT0gdW5kZWZpbmVkXCIgOnF1aXo9XCJxdWl6XCIgdi1vbjpwcmV2aWV3PVwicHJldmlldygkZXZlbnQpXCI+PC9wcmV2aWV3ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHNpdGUsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWl6OiBxdWl6LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBTdGF0ZXMuSU5JVElBTCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbnVsbCxcclxuXHQgICAgICAgICAgICAgICAgYWZ0ZXI6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgICdpbml0aWFsJzogUXVpelZ1ZSxcclxuICAgICAgICAgICAgICAgICdxdWVzdGlvbic6IFF1ZXN0aW9uVnVlLFxyXG4gICAgICAgICAgICAgICAgJ2Fuc3dlcic6IEFuc3dlclZ1ZSxcclxuICAgICAgICAgICAgICAgICdleHBpcmVkJzogRXhwaXJlZFZ1ZSxcclxuICAgICAgICAgICAgICAgICdjbG9zZWQnOiBDbG9zZWRWdWUsXHJcbiAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFJlc3VsdHNWdWUsXHJcbiAgICAgICAgICAgICAgICAncHJldmlld2VyJzogUHJldmlld2VyVnVlLFxyXG4gICAgICAgICAgICAgICAgJ3ByZXZpZXcnOiBQcmV2aWV3VnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1aXouZXhwaXJlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdleHBpcmVkJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnF1aXouY2xvc2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1xdWl6LWFmdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFmdGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBcdHRoaXMuYWZ0ZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU3RhdGVzLlNUQVJUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5RVUVTVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucXVpei5xdWVzdGlvbiA8IHRoaXMucXVpei5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXoucXVlc3Rpb24rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncXVlc3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5SRVNVTFRTOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3Jlc3VsdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFmdGVyICE9PSBudWxsKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5RVUVTVElPTjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXoucXVlc3Rpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdxdWVzdGlvbic7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYW5zd2VyKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLkFOU1dFUjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAnYW5zd2VyJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXouYW5zd2VyID0gZGF0YS5hdHRyaWJ1dGVzLmFuc3dlcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3KGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpei5xdWVzdGlvbiA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5QUkVWSUVXO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdwcmV2aWV3JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBRdWl6RGF0YSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBmb3JtIGRhdGEgZm9yIGEgcXVlc3Rpb24gb3IgcHJldmlldy4gVmFsaWRhdGVzIHRoYXQgYW4gYW5zd2VyIGlzIHN1cHBsaWVkXHJcbiAqXHJcbiAqIEBwYXJhbSB2dWUgVnVlIHRoaXMgaXMgZ2V0dGluZyB0aGUgZm9ybSBmcm9tXHJcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdCBvciBudWxsIGlmIHZhbGlkYXRpb24gZmFpbHMuXHJcbiAqL1xyXG5RdWl6RGF0YS5nZXQgPSBmdW5jdGlvbih2dWUsIG11c3RQcm92aWRlTWVzc2FnZSkge1xyXG5cdGNvbnN0IGZvcm0gPSB2dWUuJHJlZnNbJ2Zvcm0nXTtcclxuXHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0Ly8gVmFsaWRhdGUgYWxsIGNvbnRyb2xzIG9mIGNsYXNzIGNsLWFuc3dlci1yZXF1aXJlZCBhcyBoYXZpbmcgaW5wdXRcclxuXHRmb3IoY29uc3QgaW5wdXQgb2YgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5jbC1hbnN3ZXItcmVxdWlyZWQnKSkge1xyXG5cdFx0Ly8gVmFsaWRhdGUgdGhhdCBhbiBhbnN3ZXIgaGFzIGJlZW4gc3VwcGxpZWQgSUYgYSBmb3JtIGNvbnRyb2xcclxuXHRcdC8vIG5hbWVkIGNsLWFuc3dlciBleGlzdHMuXHJcblx0XHRjb25zdCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoaW5wdXQubmFtZSk7XHJcblx0XHRpZihhbnN3ZXIgPT09IG51bGwgfHwgYW5zd2VyID09PSAnJykge1xyXG5cdFx0XHRpZihtdXN0UHJvdmlkZU1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHZ1ZS4kc2l0ZS50b2FzdCh2dWUsIG11c3RQcm92aWRlTWVzc2FnZSk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaChpbnB1dC50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0XHRcdFx0dnVlLiRzaXRlLnRvYXN0KHZ1ZSwgJ1lvdSBtdXN0IGNob29zZSBhbiBvcHRpb24nKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dnVlLiRzaXRlLnRvYXN0KHZ1ZSwgJ1lvdSBtdXN0IHByb3ZpZGUgYW4gYW5zd2VyJyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9ybURhdGE7XHJcbn0iLCJpbXBvcnQge1F1aXp9IGZyb20gXCIuL1F1aXpcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgUXVpeiBzeXN0ZW0gZmFjdG9yeVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWl6RmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5RdWl6RmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgY29uc3QgcXVpeiA9IG5ldyBRdWl6KHNpdGUpO1xyXG5cclxuICAgIHNpdGUuc3RhcnQoICgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1xdWl6Jyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBxdWl6LmluaXRpYWxpemUoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgbGV0IFN0YXRlcyA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TdGF0ZXMuSU5JVElBTCA9IDA7XHJcblN0YXRlcy5TVEFSVCA9IDE7XHJcblN0YXRlcy5RVUVTVElPTiA9IDI7XHJcblN0YXRlcy5SRVNVTFRTID0gMztcclxuU3RhdGVzLlBSRVZJRVcgPSA0O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTIwMGI0MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxMjAwYjQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxMjAwYjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxMjAwYjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMjAwYjQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxMjAwYjQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTIwMGI0MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzk3MTUwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMzOTcxNTBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMzOTcxNTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMzOTcxNTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzOTcxNTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzOTcxNTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzk3MTUwZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYzZDA5NzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE2M2QwOTczJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE2M2QwOTczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE2M2QwOTczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjNkMDk3MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNjNkMDk3MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL0V4cGlyZWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2M2QwOTczJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTQ0OTIxMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjU0NDkyMTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjU0NDkyMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjU0NDkyMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1NDQ5MjEyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1NDQ5MjEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5pdGlhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNmI4NmQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjZiODZkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjZiODZkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjZiODZkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI2Yjg2ZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjI2Yjg2ZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjZiODZkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJldmlld2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYWEwYjk3YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JhYTBiOTdhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JhYTBiOTdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JhYTBiOTdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhYTBiOTdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JhYTBiOTdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldmlld2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYWEwYjk3YSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MTQwODA4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0MTQwODA4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0MTQwODA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0MTQwODA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxNDA4MDgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQxNDA4MDgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxNDA4MDgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2NmU2NDc4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNjZlNjQ3OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNjZlNjQ3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNjZlNjQ3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzdWx0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ZTY0NzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDY2ZTY0NzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjZlNjQ3OCZcIiJdLCJzb3VyY2VSb290IjoiIn0=