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
/******/ 	var hotCurrentHash = "b51a116647a55917ce6f";
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
/******/ 			_selfInvalidated: false,
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
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
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
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
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
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
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
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
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
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
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
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
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
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
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
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
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
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
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
//
//
var FetcherVue = Site.FetcherVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
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
  'extends': ConsoleComponentBase,
  props: ['memberid', 'assigntag', 'quiztag'],
  data: function data() {
    return {
      fetching: true,
      quizUser: null,
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
    this.addNav2Link('Exit', 2, '/cl/console/quiz/results/' + this.assigntag);
    this.$site.api.get("/api/quiz/result/".concat(this.memberid, "/").concat(this.assigntag, "/").concat(this.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        _this.quizUser = new Users.User(response.getData('quiz-user').attributes);
        var member = _this.quizUser.member;
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
    },
    deleteTry: function deleteTry(tried) {
      var _this3 = this;

      var token = tried.token;
      new this.$site.Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete this quiz try?', this.$site.Dialog.MessageBox.OKCANCEL, function () {
        _this3.$site.api.post('/api/quiz/result/token/' + token + '/delete', {}).then(function (response) {
          if (!response.hasError()) {
            // Remove this try from all available tries.
            _this3.tries = _this3.tries.filter(function (value, index, arr) {
              return value.token !== token;
            });
            _this3.answers = null;
            _this3.answer = null;

            if (_this3.tries.length > 0) {
              _this3.selectTry(_this3.tries[0].token);
            } else {
              _this3.token = null;
            }
          } else {
            _this3.$site.toast(_this3, response);
          }
        })["catch"](function (error) {
          _this3.$site.toast(_this3, error);
        });
      });
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      assignment: null
    };
  },
  methods: {
    process: function process(results) {
      this.results = results; // Collect up the quiz tags

      for (var member in results) {
        if (!results.hasOwnProperty(member)) {
          continue;
        }

        for (var quizTag in results[member]) {
          if (!results[member].hasOwnProperty(quizTag)) {
            continue;
          }

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

      var _iterator = _createForOfIteratorHelper(this.quizTags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          var result = this.quizResult(user, tag);

          if (result !== null) {
            sum += +result.points;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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

      var memberId = user.member.id;

      if (this.results[memberId] !== undefined && this.results[memberId][tag] !== undefined) {
        return this.results[memberId][tag];
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
    this.$site.api.get('/api/quiz/all/' + this.assigntag, query).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results-all');

        if (data !== null) {
          _this.process(data.attributes.results);
        }
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);

      _this.$site.toast(_this, error);
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
      'numTries': 0,
      'allowedTries': 0,
      'numFinished': 0
    };
  },
  mounted: function mounted() {
    this.allowedTries = +this.quiz['allowed-tries'];
    this.numTries = +this.quiz['num-tries'];
    this.numFinished = +this.quiz['num-finished'];
  },
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
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
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
      active: null,
      question: null,
      time: 0,
      mustProvideMessage: undefined,
      remainingMinutes: null,
      remainingSeconds: null,
      remainingSecondsStr: null
    };
  },
  props: ['quiz'],
  mounted: function mounted() {
    var _this = this;

    this.$site.api.post("/api/quiz/question/".concat(this.quiz.token, "/").concat(this.quiz.question), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-question');

        _this.take(data.attributes);
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    take: function take(data) {
      var _this2 = this;

      this.active = true;
      this.question = data.question;
      this.time = data.time;
      this.mustProvideMessage = data.mustProvideMessage;
      var after = document.getElementById('cl-quiz-after');

      if (after !== null && data.after !== undefined) {
        after.innerHTML = data.after;
      } // Support indicating to external Javascript that a quiz
      // question has been installed.


      this.$site.Vue.nextTick(function () {
        _this2.$site.message('cl-quiz-after-installed', null);
      });

      if (this.quiz.lightning !== null) {
        this.remainingMinutes = Math.floor(this.quiz.lightning / 60);
        this.remainingSeconds = this.quiz.lightning % 60;
        this.remainingSecondsStr = this.remainingSeconds < 10 ? '0' + this.remainingSeconds : this.remainingSeconds;
        this.timer();
      }
    },
    timer: function timer() {
      var _this3 = this;

      setTimeout(function () {
        if (!_this3.active) {
          return;
        }

        _this3.remainingSeconds--;
        _this3.remainingSecondsStr = _this3.remainingSeconds < 10 ? '0' + _this3.remainingSeconds : _this3.remainingSeconds;

        if (_this3.remainingSeconds === 0 && _this3.remainingMinutes === 0) {
          // Question has timed out
          _this3.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_1__["States"].QUESTION);

          return;
        }

        if (_this3.remainingSeconds < 0) {
          _this3.remainingMinutes--;
          _this3.remainingSeconds = 59;
          _this3.remainingSecondsStr = '59';
        }

        _this3.timer();
      }, 1000);
    },
    proceed: function proceed() {},
    submit: function submit() {
      var _this4 = this;

      var formData = _QuizData__WEBPACK_IMPORTED_MODULE_0__["QuizData"].get(this, this.mustProvideMessage);

      if (formData === null) {
        return;
      }

      this.$site.api.post("/api/quiz/answer/".concat(this.quiz.token, "/").concat(this.quiz.question), formData).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-answer');
          _this4.active = false;

          _this4.$emit('answer', data);
        } else {
          _this4.$site.toast(_this4, response);
        }
      })["catch"](function (error) {
        _this4.$site.toast(_this4, error);
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

        var _iterator = _createForOfIteratorHelper(_this.tries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tried = _step.value;

            if (+tried.points > +_this.high) {
              _this.high = tried.points;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-quiz {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc; }\n\ndiv.cl-quiz {\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: #ecffef; }\n  div.cl-quiz > div {\n    width: 100%; }\n  div.cl-quiz > div.content {\n    padding: 0; }\n  div.cl-quiz div.cl-results {\n    width: 80%;\n    margin: 0 auto; }\n  div.cl-quiz h2 {\n    border: 0;\n    margin-top: 14px; }\n  div.cl-quiz div.cl-multi {\n    margin: 1em 0;\n    padding: 0 0 0 3em; }\n    div.cl-quiz div.cl-multi p {\n      margin: 0; }\n  div.cl-quiz p.done {\n    background: #c41425;\n    text-align: center;\n    color: white; }\n  div.cl-quiz button {\n    width: 10em;\n    font-size: 0.9em; }\n  div.cl-quiz tr.best td {\n    background: #dde; }\n  div.cl-quiz div.previewer {\n    clear: both;\n    border-top: 1px solid black; }\n    div.cl-quiz div.previewer h3 {\n      margin: 0;\n      font-size: 1.2em; }\n    div.cl-quiz div.previewer ul {\n      margin-top: 0; }\n  div.cl-quiz div.preview {\n    margin: 0 0 1em 0; }\n    div.cl-quiz div.preview hr {\n      margin: 0; }\n    div.cl-quiz div.preview h3 {\n      text-align: center; }\n    div.cl-quiz div.preview p.preview {\n      font-style: italic;\n      margin-top: 0;\n      text-align: center;\n      border-bottom: 1px solid black; }\n  div.cl-quiz p.cl-quiz-answer-note {\n    text-align: center;\n    font-style: italic;\n    color: #800; }\n\n@media only screen and (max-width: 750px) {\n  #quiz {\n    margin-right: 5px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-about[data-v-d981142c] {\n  margin: 1em auto;\n  display: table;\n}\ndiv.cl-about p[data-v-d981142c] {\n    display: table-row;\n}\ndiv.cl-about p span[data-v-d981142c] {\n      display: table-cell;\n      text-align: left;\n}\ndiv.cl-about p span[data-v-d981142c]:first-child {\n      text-align: right;\n      padding-right: 1em;\n}\ntr[data-v-d981142c] {\n  cursor: pointer;\n}\ntr[data-v-d981142c]:first-child {\n  cursor: default;\n}\ntr.selected td[data-v-d981142c] {\n  background: #88ffff;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "table td[data-v-c268df96] {\n  text-align: center;\n}\ntable td[data-v-c268df96]:nth-child(1), table td[data-v-c268df96]:nth-child(2), table td[data-v-c268df96]:nth-child(3), table td[data-v-c268df96]:nth-child(4) {\n  text-align: left;\n}\n", ""]);
// Exports
module.exports = exports;


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
                    _c("span", [_vm._v(_vm._s(_vm.quizUser.name))])
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
                _vm.tries.length > 0
                  ? _c(
                      "table",
                      { staticClass: "small center" },
                      [
                        _c("tr", [
                          _c("th"),
                          _vm._v(" "),
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
                              class: tried.token === _vm.token ? "selected" : ""
                            },
                            [
                              _c("td", [
                                tried.token === _vm.token
                                  ? _c(
                                      "a",
                                      {
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
                                            return _vm.deleteTry(tried)
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.root + "/cl/img/x.png"
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
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
                                [_vm._v(_vm._s(_vm.time(tried.start)))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
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
                                  _vm._v(
                                    _vm._s(_vm.elapsed(tried.start, tried.end))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
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
                                [_vm._v(_vm._s(tried.points))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
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
                                [_vm._v(_vm._s(tried.maxpoints))]
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  : _c("p", { staticClass: "center" }, [
                      _vm._v("No quiz tries!")
                    ]),
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
  return _c(
    "div",
    [
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
      _vm.allowedTries === 0
        ? [
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
          ]
        : [
            _vm.numTries < _vm.allowedTries
              ? [
                  _vm.allowedTries > 0
                    ? _c("p", { staticClass: "center" }, [
                        _vm._v(
                          "You have " +
                            _vm._s(_vm.allowedTries - _vm.numTries) +
                            " " +
                            _vm._s(
                              _vm.allowedTries - _vm.numTries > 1
                                ? "tries"
                                : "try"
                            ) +
                            " left."
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
                    _vm._v(" You can also\n        "),
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
                ]
              : [
                  _c("p", [
                    _vm._v(
                      "You have completed your maximum number of tries for this quiz and can no longer take it. You can\n        "
                    ),
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
                ]
          ]
    ],
    2
  )
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
          _vm.remainingSeconds !== null
            ? _c("p", { staticClass: "center" }, [
                _vm._v(
                  _vm._s(_vm.remainingMinutes) +
                    ":" +
                    _vm._s(_vm.remainingSecondsStr) +
                    " remaining!"
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
              } else {
                this.page = 'results';
                this.state = state;

                if (this.after !== null) {
                  this.after.innerHTML = '';
                }
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var _iterator = _createForOfIteratorHelper(form.querySelectorAll('input.cl-answer-required')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
    _iterator.e(err);
  } finally {
    _iterator.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Fuc3dlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9DbG9zZWQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1F1ZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT8xZTMzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/YzU4NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP2U0ZjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT9jNTJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlPzhiZDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/ODg3OSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/YWU0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWU/N2ZkZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlldy52dWU/ZTMzNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZT83MmZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/NmU5ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUmVzdWx0cy52dWU/NGMxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlPzg0YzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT84OGE0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3M/MjE1ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT85MWQ3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWU/YTI0ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlPzM0NTEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpTdGF0dXNDb21wb25lbnQudnVlPzk4MTIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT82Y2Q4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/YTM0NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9RdWl6LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1F1aXpEYXRhLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1F1aXpGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1N0YXRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZT9iMGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlP2VmY2QiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/MmYyMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZT9mNDA0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZmZmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZTNiZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzc2YTkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzEwMzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT85MGFjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT9iNmQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlPzY0MjgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWU/NmQxMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/OTc2NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlP2M4OTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT84YzdhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT9mNzIzIl0sIm5hbWVzIjpbIlF1aXpGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJRdWl6Q29uc29sZSIsInNldHVwIiwiQ29uc29sZSIsInRhYmxlcyIsImFkZCIsInRpdGxlIiwib3JkZXIiLCJhcGkiLCJjb21wb25lbnRzIiwiYWRkUm91dGUiLCJyb3V0ZSIsImNvbXBvbmVudCIsIlF1aXpTdGF0dXNDb21wb25lbnQiLCJwcm9wcyIsIlF1aXpSZXN1bHRDb21wb25lbnQiLCJjb3Vyc2UiLCJhc3NpZ25tZW50TGluayIsIlF1aXoiLCJzaXRlIiwiaW5pdGlhbGl6ZSIsImVsZW1lbnQiLCJxdWl6IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJ0ZW1wbGF0ZSIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwiU3RhdGVzIiwiSU5JVElBTCIsInBhZ2UiLCJmaWxlIiwiYWZ0ZXIiLCJRdWl6VnVlIiwiUXVlc3Rpb25WdWUiLCJBbnN3ZXJWdWUiLCJFeHBpcmVkVnVlIiwiQ2xvc2VkVnVlIiwiUmVzdWx0c1Z1ZSIsIlByZXZpZXdlclZ1ZSIsIlByZXZpZXdWdWUiLCJtb3VudGVkIiwiZXhwaXJlZCIsImNsb3NlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJtZXRob2RzIiwibmV3U3RhdGUiLCJTVEFSVCIsInN0YXJ0IiwiUVVFU1RJT04iLCJxdWVzdGlvbiIsImxlbmd0aCIsIlJFU1VMVFMiLCJhbnN3ZXIiLCJBTlNXRVIiLCJhdHRyaWJ1dGVzIiwicHJldmlldyIsIlBSRVZJRVciLCJRdWl6RGF0YSIsImdldCIsInZ1ZSIsIm11c3RQcm92aWRlTWVzc2FnZSIsImZvcm0iLCIkcmVmcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJuYW1lIiwiJHNpdGUiLCJ0b2FzdCIsInR5cGUiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRjtBQUN6RyxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwwSEFBK0MsRUFBRTtBQUFBO0FBQ3ZFO0FBQ0EsZ0JBQWdCLG1GQUFNO0FBQ3RCLHlCQUF5Qiw0RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFrTSxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBcUY7QUFDekcsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isd0hBQThDLEVBQUU7QUFBQTtBQUN0RTtBQUNBLGdCQUFnQixrRkFBTTtBQUN0Qix5QkFBeUIsMkZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InF1aXouanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJRdWl6XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1aXpcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiYjUxYTExNjY0N2E1NTkxN2NlNmZcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiUXVpelwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9xdWl6L2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGluZz1cImZldGNoaW5nXCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWZldGNoaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtYWJvdXRcIj5cclxuICAgICAgICAgICAgPHA+PHNwYW4+Q291cnNlIE1lbWJlcjogPC9zcGFuPjxzcGFuPnt7cXVpelVzZXIubmFtZX19PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+PHNwYW4+QXNzaWdubWVudDogPC9zcGFuPjxzcGFuPnt7YXNzaWdubWVudC5uYW1lfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Bhbj5RdWl6OiA8L3NwYW4+PHNwYW4+e3txdWl6dGFnfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGFibGUgdi1pZj1cInRyaWVzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNtYWxsIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+V2hlbiBUYWtlbjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkZpbmlzaGVkPzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInRyaWVkIGluIHRyaWVzXCIgOmNsYXNzPVwidHJpZWQudG9rZW4gPT09IHRva2VuID8gJ3NlbGVjdGVkJzonJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSB2LWlmPVwidHJpZWQudG9rZW4gPT09IHRva2VuXCIgQGNsaWNrLmRlZmF1bHQ9XCJkZWxldGVUcnkodHJpZWQpXCI+PGltZyA6c3JjPVwicm9vdCArICcvY2wvaW1nL3gucG5nJ1wiPjwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBAY2xpY2suZGVmYXVsdD1cInNlbGVjdFRyeSh0cmllZC50b2tlbilcIj57e3RpbWUodHJpZWQuc3RhcnQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBAY2xpY2suZGVmYXVsdD1cInNlbGVjdFRyeSh0cmllZC50b2tlbilcIj57e2VsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIEBjbGljay5kZWZhdWx0PVwic2VsZWN0VHJ5KHRyaWVkLnRva2VuKVwiPnt7dHJpZWQucG9pbnRzfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBAY2xpY2suZGVmYXVsdD1cInNlbGVjdFRyeSh0cmllZC50b2tlbilcIj57e3RyaWVkLm1heHBvaW50c319PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiIHYtZWxzZT5ObyBxdWl6IHRyaWVzITwvcD5cclxuXHJcbiAgICAgICAgICA8dGFibGUgdi1pZj1cImFuc3dlcnMgIT09IG51bGwgJiYgYW5zd2Vycy5sZW5ndGggPiAwXCIgY2xhc3M9XCJzbWFsbCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+QXNrZWQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BbnN3ZXJlZDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cImFucyBpbiBhbnN3ZXJzXCIgOmNsYXNzPVwiYW5zd2VyICE9PSBudWxsICYmIGFucy5udW0gPT09IGFuc3dlci5udW0gPyAnc2VsZWN0ZWQnOicnXCJcclxuICAgICAgICAgICAgICAgIEBjbGljay5kZWZhdWx0PVwic2VsZWN0QW5zd2VyKGFucy5udW0pXCI+XHJcbiAgICAgICAgICAgICAgPHRkPnt7YW5zLm51bX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3thbnMucG9pbnRzfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3RpbWUoYW5zLnF1ZXN0aW9udGltZSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dGltZShhbnMuYW5zd2VydGltZSl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiYW5zd2VycyAhPT0gbnVsbCAmJiBhbnN3ZXJzLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5IGNlbnRlclwiPk5vIGFuc3dlcnMgcHJvdmlkZWQgZm9yIHRoaXMgcXVpeiB0cnkuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXF1aXpcIiB2LWlmPVwiYW5zd2VyICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPlF1ZXN0aW9uOiB7e2Fuc3dlci5udW19fSBvZiB7e2Fuc3dlcnMubGVuZ3RofX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiIHYtaHRtbD1cImFuc3dlci5xdWVzdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz5TdHVkZW50IGFuc3dlcjo8L2gzPlxyXG4gICAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJjb2RlXCI+e3thbnN3ZXIuc3R1ZGVudGFuc3dlcn19PC9wcmU+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYW5zd2VyLnJpZ2h0YW5zd2VyLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Db3JyZWN0IGFuc3dlcjo8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj57e2Fuc3dlci5yaWdodGFuc3dlcn19PC9wcmU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9mZXRjaGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICAvKlxyXG5hbnN3ZXJ0aW1lXHJcbm51bVxyXG5wb2ludHNcclxucXVlc3Rpb25cclxucXVlc3Rpb250aW1lXHJcbnJpZ2h0YW5zd2VyXHJcbnN0dWRlbnRhbnN3ZXJcclxudG9rZW5cclxuICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgIHByb3BzOiBbXHJcbiAgICAgICdtZW1iZXJpZCcsICdhc3NpZ250YWcnLCAncXVpenRhZydcclxuICAgIF0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hpbmc6IHRydWUsXHJcbiAgICAgICAgcXVpelVzZXI6IG51bGwsXHJcbiAgICAgICAgc2VjdGlvbjogbnVsbCxcclxuICAgICAgICBhc3NpZ25tZW50OiBudWxsLFxyXG4gICAgICAgIHRyaWVzOiBudWxsLFxyXG4gICAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICAgIGFuc3dlcnM6IG51bGwsXHJcbiAgICAgICAgYW5zd2VyOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBRdWl6IFJlc3VsdCcpO1xyXG4gICAgICB0aGlzLmFkZE5hdjJMaW5rKCdFeGl0JywgMiwgJy9jbC9jb25zb2xlL3F1aXovcmVzdWx0cy8nICsgdGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcmVzdWx0LyR7dGhpcy5tZW1iZXJpZH0vJHt0aGlzLmFzc2lnbnRhZ30vJHt0aGlzLnF1aXp0YWd9YCwge30pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6VXNlciA9IG5ldyBVc2Vycy5Vc2VyKHJlc3BvbnNlLmdldERhdGEoJ3F1aXotdXNlcicpLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLnF1aXpVc2VyLm1lbWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWdubWVudCA9IHRoaXMuc2VjdGlvbi5nZXRBc3NpZ25tZW50KHRoaXMuYXNzaWdudGFnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJpZXMgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXRyaWVzJykuYXR0cmlidXRlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlcnMgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LWFuc3dlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gYW5zd2Vycy5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBhbnN3ZXJzLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmFuc3dlcnMubGVuZ3RoID4gMCA/IHRoaXMuYW5zd2Vyc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hpbmcgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0aW1lKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBlbGFwc2VkKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBpZiAoZW5kID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBlbmQgLSBzdGFydDtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gZGlmZiAlIDYwO1xyXG4gICAgICAgIHJldHVybiAnJyArIG1pbiArICc6JyArIChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0VHJ5KHRva2VuKSB7XHJcbiAgICAgICAgLy90aGlzLmZldGNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcmVzdWx0L3Rva2VuLyR7dG9rZW59YCwge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXJzID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1hbnN3ZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IGFuc3dlcnMuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gdGhpcy5hbnN3ZXJzLmxlbmd0aCA+IDAgPyB0aGlzLmFuc3dlcnNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0QW5zd2VyKG51bSkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyID0gdGhpcy5hbnN3ZXJzW251bSAtIDFdO1xyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVUcnkodHJpZWQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRyaWVkLnRva2VuO1xyXG5cclxuICAgICAgICBuZXcgdGhpcy4kc2l0ZS5EaWFsb2cuTWVzc2FnZUJveCgnQXJlIHlvdSBzdXJlPycsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcXVpeiB0cnk/JyxcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9xdWl6L3Jlc3VsdC90b2tlbi8nICsgdG9rZW4gKyAnL2RlbGV0ZScsIHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIHRyeSBmcm9tIGFsbCBhdmFpbGFibGUgdHJpZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZXMgPSB0aGlzLnRyaWVzLmZpbHRlcigodmFsdWUsIGluZGV4LCBhcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9rZW4gIT09IHRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VHJ5KHRoaXMudHJpZXNbMF0udG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgZGl2LmNsLWFib3V0IHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHRyOmZpcnN0LWNoaWxkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHRyLnNlbGVjdGVkIHtcclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXIgOmZldGNoaW5nPVwicmVzdWx0cyA9PT0gbnVsbFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwic21hbGxcIiB2LWZvcj1cInRhZyBpbiBxdWl6VGFnc1wiPnt7dGFnfX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRkID57e3VzZXIudXNlcklkfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJ0YWcgaW4gcXVpelRhZ3NcIj57e3N0YXR1cyh1c2VyLCB0YWcpfX1cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJsaW5rKHVzZXIsIHRhZylcIiB2LWlmPVwicXVpelJlc3VsdCh1c2VyLCB0YWcpIT09bnVsbFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9leWUxNi5wbmcnXCI+PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPnt7dG90YWwodXNlcil9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyc2ZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBxdWl6VGFnczogW10sXHJcbiAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICBhc3NpZ25tZW50OiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHByb2Nlc3MocmVzdWx0cykge1xyXG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XHJcblxyXG4gICAgICAgIC8vIENvbGxlY3QgdXAgdGhlIHF1aXogdGFnc1xyXG4gICAgICAgIGZvciAobGV0IG1lbWJlciBpbiByZXN1bHRzKSB7XHJcbiAgICAgICAgICBpZighcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShtZW1iZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvciAobGV0IHF1aXpUYWcgaW4gcmVzdWx0c1ttZW1iZXJdKSB7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHRzW21lbWJlcl0uaGFzT3duUHJvcGVydHkocXVpelRhZykpIHtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucXVpelRhZ3MuaW5kZXhPZihxdWl6VGFnKSA8IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnF1aXpUYWdzLnB1c2gocXVpelRhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXModXNlciwgdGFnKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5xdWl6UmVzdWx0KHVzZXIsIHRhZyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnICsgcmVzdWx0LnBvaW50cyArICcvJyArIHJlc3VsdC5tYXhwb2ludHM7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdGFsKHVzZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXN1bHRzID09PSBudWxsIHx8IHRoaXMuYXNzaWdubWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRoaXMucXVpelRhZ3MpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucXVpelJlc3VsdCh1c2VyLCB0YWcpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdW0gKz0gK3Jlc3VsdC5wb2ludHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJyArIHN1bSArICcvJyArIHRoaXMuYXNzaWdubWVudC5xdWl6O1xyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogR0V0IGEgcXVpeiByZXN1bHQgZm9yIGEgdXNlciBpZiBvbmUgZXhpc3RzLCBvdGhlcndpc2UgcmV0dXJuIG51bGwuXHJcbiAgICAgICAqIEBwYXJhbSB1c2VyIFVzZXIgb2JqZWN0XHJcbiAgICAgICAqIEBwYXJhbSB0YWcgcXVpeiB0YWdcclxuICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAqL1xyXG4gICAgICBxdWl6UmVzdWx0KHVzZXIsIHRhZykge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc3VsdHMgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVtYmVySWQgPSB1c2VyLm1lbWJlci5pZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0c1ttZW1iZXJJZF0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzW21lbWJlcklkXVt0YWddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNbbWVtYmVySWRdW3RhZ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSxcclxuICAgICAgbGluayh1c2VyLCB0YWcpIHtcclxuICAgICAgICByZXR1cm4gYCR7U2l0ZS5yb290fS9jbC9jb25zb2xlL3F1aXovcmVzdWx0LyR7dXNlci5tZW1iZXIuaWR9LyR7dGhpcy5hc3NpZ25tZW50LnRhZ30vJHt0YWd9YDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG4gICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBRdWl6IFN0YXR1cycpO1xyXG5cclxuICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL3F1aXovYWxsLycgKyB0aGlzLmFzc2lnbnRhZywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXJlc3VsdHMtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKGRhdGEuYXR0cmlidXRlcy5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxudGFibGUge1xyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRkOm50aC1jaGlsZCgxKSwgIHRkOm50aC1jaGlsZCgyKSwgIHRkOm50aC1jaGlsZCgzKSwgIHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGgyIHYtaWY9XCJxdWl6Lmxlbmd0aCA+IDFcIj5RdWVzdGlvbiB7e3F1aXoucXVlc3Rpb259fSBvZiB7e3F1aXoubGVuZ3RofX08L2gyPlxyXG4gICAgICA8Zm9ybSByZWY9XCJmb3JtXCIgbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVpei5hbnN3ZXJcIj48L2Rpdj5cclxuICAgICAgICA8cCB2LWlmPVwicXVpei5xdWVzdGlvbiA8IHF1aXoubGVuZ3RoXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TmV4dCBRdWVzdGlvbjwvYnV0dG9uPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPGRpdiB2LWlmPVwicXVpei5xdWVzdGlvbiA+PSBxdWl6Lmxlbmd0aFwiPlxyXG4gICAgICA8cCBjbGFzcz1cImRvbmVcIj5UaGlzIFF1aXogaXMgQ29tcGxldGU8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+WW91IG1heSA8YSBAY2xpY2sucHJldmVudD1cInJldGFrZVwiPnJldGFrZSB0aGUgcXVpejwvYT4gaWYgeW91IHdpc2g8L3A+XHJcbiAgICAgIDxyZXN1bHRzIDpxdWl6PVwicXVpelwiPjwvcmVzdWx0cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xyXG4gICAgaW1wb3J0IFJlc3VsdHNWdWUgZnJvbSAnLi9SZXN1bHRzLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgJ3F1aXonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdyZXN1bHRzJzogUmVzdWx0c1Z1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1aXoucXVlc3Rpb24gPCB0aGlzLnF1aXoubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LXN0YXRlJywgU3RhdGVzLlFVRVNUSU9OKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV0YWtlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5UaGUgcXVpeiBpcyBjbG9zZWQgYW5kIG5vdCBhdmFpbGFibGUgYXQgdGhpcyB0aW1lLjwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICdxdWl6J1xyXG4gICAgICBdXHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggY29tcFwiPlRoZSBxdWl6IGhhcyBleHBpcmVkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHRha2VuLiBRdWl6emVzIGV4cGlyZSBhdCB0aGUgdGltZVxyXG4gICAgICB0aGUgYXNzaWdubWVudCBpcyBkdWUuIDwvcD5cclxuICAgIDxwPllvdSBjYW4gcHJvY2VlZCB0aHJvdWdoIHRoZSBxdWl6IGZvciBwcmFjdGljZSBwdXJwb3NlcywgYnV0IG5ldyBncmFkZXMgYW5kXHJcbiAgICAgIHN1Ym1pc3Npb25zIHdpbGwgbm90IGJlIHBvc3NpYmxlLjwvcD5cclxuXHJcbiAgICA8cD5XaGVuIHJlYWR5LCA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJwcm9jZWVkKClcIj5jbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LjwvYT4gWW91IGNhbiBhbHNvXHJcbiAgICAgIDxhIHYtb246Y2xpY2sucHJldmVudD1cInJlc3VsdHMoKVwiPmp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuPC9hPjwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICdxdWl6J1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBwcm9jZWVkKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5TVEFSVCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzdWx0cygpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUkVTVUxUUyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHYtaHRtbD1cInF1aXouc3BsYXNoXCI+PC9kaXY+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJjZW50ZXJcIiB2LWlmPVwicXVpei5saWdodG5pbmcgPT09IG51bGxcIj5UaGlzIHF1aXogaGFzIG5vIHNwZWNpZmllZCB0aW1lIGxpbWl0LjwvcD5cclxuICAgIDxwIHYtaWY9XCJxdWl6LmxpZ2h0bmluZyAhPT0gbnVsbFwiIGNsYXNzPVwiY2VudGVyYm94IHNlY29uZGEgY2VudGVyXCI+VGhpcyBpcyBhIGxpZ2h0bmluZyBxdWl6LlxyXG4gICAgICBZb3UgaGF2ZSB7e3F1aXoubGlnaHRuaW5nfX0gc2Vjb25kcyB0byBhbnN3ZXIgZWFjaCBxdWVzdGlvbi48L3A+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJhbGxvd2VkVHJpZXMgPT09IDBcIj5cclxuICAgICAgPHA+V2hlbiByZWFkeSwgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicHJvY2VlZCgpXCI+Y2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei48L2E+IFlvdSBjYW4gYWxzb1xyXG4gICAgICA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJyZXN1bHRzKClcIj5qdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLjwvYT48L3A+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJudW1UcmllcyA8IGFsbG93ZWRUcmllc1wiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCIgdi1pZj1cImFsbG93ZWRUcmllcyA+IDBcIj5Zb3UgaGF2ZSB7e2FsbG93ZWRUcmllcyAtIG51bVRyaWVzfX0ge3soYWxsb3dlZFRyaWVzIC0gbnVtVHJpZXMpID4gMSA/ICd0cmllcycgOiAndHJ5JyB9fSBsZWZ0LjwvcD5cclxuICAgICAgICA8cD5XaGVuIHJlYWR5LCA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJwcm9jZWVkKClcIj5jbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LjwvYT4gWW91IGNhbiBhbHNvXHJcbiAgICAgICAgICA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJyZXN1bHRzKClcIj5qdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLjwvYT48L3A+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgPHA+WW91IGhhdmUgY29tcGxldGVkIHlvdXIgbWF4aW11bSBudW1iZXIgb2YgdHJpZXMgZm9yIHRoaXMgcXVpeiBhbmQgY2FuIG5vIGxvbmdlciB0YWtlIGl0LiBZb3UgY2FuXHJcbiAgICAgICAgICA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJyZXN1bHRzKClcIj5qdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLjwvYT48L3A+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbXHJcbiAgICAgICdxdWl6J1xyXG4gICAgXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdudW1Ucmllcyc6IDAsXHJcbiAgICAgICAgJ2FsbG93ZWRUcmllcyc6IDAsXHJcbiAgICAgICAgJ251bUZpbmlzaGVkJzogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5hbGxvd2VkVHJpZXMgPSArdGhpcy5xdWl6WydhbGxvd2VkLXRyaWVzJ107XHJcbiAgICAgIHRoaXMubnVtVHJpZXMgPSArdGhpcy5xdWl6WydudW0tdHJpZXMnXTtcclxuICAgICAgdGhpcy5udW1GaW5pc2hlZCA9ICt0aGlzLnF1aXpbJ251bS1maW5pc2hlZCddO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcHJvY2VlZCgpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuU1RBUlQpO1xyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHRzKCkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5SRVNVTFRTKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cclxuICAgIDxkaXYgdi1pZj1cInF1ZXN0aW9uIT09bnVsbFwiPlxyXG4gICAgICA8cCBjbGFzcz1cInByZXZpZXdcIiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UHJldmlldyBvZiB7e3F1aXoucXVlc3Rpb259fS4gQXZhaWxhYmxlIHRvIHN0YWZmIG9ubHkuPC9wPlxyXG4gICAgICA8Zm9ybSByZWY9XCJmb3JtXCIgbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF1ZXN0aW9uLXRpbWVcIiA6dmFsdWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJxdWVzdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDxwPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPjwvcD5cclxuICAgICAgICA8aHI+XHJcblxyXG4gICAgICAgIDxoMyB2LWlmPVwiYW5zd2Vycy5sZW5ndGggPiAwXCI+QW5zd2VyczwvaDM+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cImFuc3dlciBpbiBhbnN3ZXJzXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cImFuc3dlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImNvbW1lbnQgIT09IG51bGxcIj5cclxuICAgICAgICAgIDxoMz5Db21tZW50PC9oMz5cclxuICAgICAgICAgIDxkaXYgdi1odG1sPVwiY29tbWVudFwiIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnlcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtRdWl6RGF0YX0gZnJvbSAnLi4vUXVpekRhdGEnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICBtdXN0UHJvdmlkZU1lc3NhZ2U6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeicsXHJcbiAgICAgICAgICAgICdmaWxlJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgZmlsZShuZXdRdWl6LCBvbGRRdWl6KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7ZmlsZTogdGhpcy5maWxlfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS9xdWl6L3ByZXZpZXcvJHt0aGlzLnF1aXoudG9rZW59YCwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1xdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLmF0dHJpYnV0ZXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gZGF0YS5hdHRyaWJ1dGVzLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ID0gZGF0YS5hdHRyaWJ1dGVzLmNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gZGF0YS5hdHRyaWJ1dGVzLmFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXN0UHJvdmlkZU1lc3NhZ2UgPSBkYXRhLmF0dHJpYnV0ZXMubXVzdFByb3ZpZGVNZXNzYWdlO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1xdWl6LWFmdGVyJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyLmlubmVySFRNTCA9IGRhdGEuYXR0cmlidXRlcy5hZnRlcjtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuVnVlLm5leHRUaWNrKCgpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUubWVzc2FnZSgnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2NlZWQoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIFx0Y29uc3QgZm9ybURhdGEgPSBRdWl6RGF0YS5nZXQodGhpcywgdGhpcy5tdXN0UHJvdmlkZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwcmV2aWV3ZXJcIj5cclxuICAgIDxoMj5TdGFmZiBRdWVzdGlvbiBQcmV2aWV3czwvaDI+XHJcbiAgICA8cD5UaGVzZSBsaW5rcyBhbGxvdyB5b3UgdG8gcHJldmlldyBxdWl6IHF1ZXN0aW9ucy4gSWYgdGhlIHF1ZXN0aW9uIGlzIHJhbmRvbWx5IHNlbGVjdGVkXHJcbiAgICAgIGZyb20gbXVsdGlwbGUgZmlsZXMsIHRoZSBmaWxlcyBhcHBlYXIgYmVsb3cgdGhlIHF1ZXN0aW9uLiA8c3BhbiBjbGFzcz1cInNtYWxscmVkXCI+VGhpcyBwYXJ0IG9mIHRoZSBwYWdlIGFwcGVhcnMgZm9yXHJcbnN0YWZmIG1lbWJlcnMgb25seS48L3NwYW4+PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwicXVlc3Rpb24gaW4gcHJldmlld3NcIiA6a2V5PVwicXVlc3Rpb24ubnVtXCI+XHJcbiAgICAgICAgPGgzPlF1ZXN0aW9uIHt7cXVlc3Rpb24ubnVtfX08L2gzPlxyXG4gICAgICAgIDx1bCB2LWlmPVwicXVlc3Rpb24uZmlsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiZmlsZSBpbiBxdWVzdGlvbi5maWxlc1wiPjxhIEBjbGljay5wcmV2ZW50PVwicHJldmlldyhmaWxlKVwiPnt7ZmlsZX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeidcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld3M6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucXVpei5wcmV2aWV3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgbnVtOiBpKzEsXHJcbiAgICAgICAgICAgICAgICAgIGZpbGVzOiB0aGlzLnF1aXoucHJldmlld1tpXVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHByZXZpZXcoZmlsZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCBmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi8uLi9jbC9kaXN0L3NpdGUuanNcIj48L3NjcmlwdD5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJxdWVzdGlvbiE9PW51bGxcIj5cclxuICAgICAgPGgyIHYtaWY9XCJxdWl6Lmxlbmd0aCA+IDFcIj5RdWVzdGlvbiB7e3F1aXoucXVlc3Rpb259fSBvZiB7e3F1aXoubGVuZ3RofX08L2gyPlxyXG4gICAgICA8cCBjbGFzcz1cImNlbnRlclwiIHYtaWY9XCJyZW1haW5pbmdTZWNvbmRzICE9PSBudWxsXCI+e3tyZW1haW5pbmdNaW51dGVzfX06e3tyZW1haW5pbmdTZWNvbmRzU3RyfX0gcmVtYWluaW5nITwvcD5cclxuICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdWVzdGlvbi10aW1lXCIgOnZhbHVlPVwidGltZVwiPlxyXG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVlc3Rpb25cIj48L2Rpdj5cclxuICAgICAgICA8cD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1F1aXpEYXRhfSBmcm9tICcuLi9RdWl6RGF0YSc7XHJcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhY3RpdmU6IG51bGwsXHJcbiAgICAgICAgcXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICBtdXN0UHJvdmlkZU1lc3NhZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICByZW1haW5pbmdNaW51dGVzOiBudWxsLFxyXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG51bGwsXHJcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kc1N0cjogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IFtcclxuICAgICAgJ3F1aXonXHJcbiAgICBdLFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS9xdWl6L3F1ZXN0aW9uLyR7dGhpcy5xdWl6LnRva2VufS8ke3RoaXMucXVpei5xdWVzdGlvbn1gLCB7fSlcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcXVlc3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRha2UoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gZGF0YS5xdWVzdGlvbjtcclxuICAgICAgICB0aGlzLnRpbWUgPSBkYXRhLnRpbWU7XHJcbiAgICAgICAgdGhpcy5tdXN0UHJvdmlkZU1lc3NhZ2UgPSBkYXRhLm11c3RQcm92aWRlTWVzc2FnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtcXVpei1hZnRlcicpO1xyXG4gICAgICAgIGlmIChhZnRlciAhPT0gbnVsbCAmJiBkYXRhLmFmdGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGFmdGVyLmlubmVySFRNTCA9IGRhdGEuYWZ0ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdXBwb3J0IGluZGljYXRpbmcgdG8gZXh0ZXJuYWwgSmF2YXNjcmlwdCB0aGF0IGEgcXVpelxyXG4gICAgICAgIC8vIHF1ZXN0aW9uIGhhcyBiZWVuIGluc3RhbGxlZC5cclxuICAgICAgICB0aGlzLiRzaXRlLlZ1ZS5uZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRzaXRlLm1lc3NhZ2UoJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJywgbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnF1aXoubGlnaHRuaW5nICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ01pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMucXVpei5saWdodG5pbmcgLyA2MCk7XHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHMgPSB0aGlzLnF1aXoubGlnaHRuaW5nICUgNjA7XHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHNTdHIgPSB0aGlzLnJlbWFpbmluZ1NlY29uZHMgPCAxMCA/ICcwJyArIHRoaXMucmVtYWluaW5nU2Vjb25kcyA6IHRoaXMucmVtYWluaW5nU2Vjb25kcztcclxuICAgICAgICAgIHRoaXMudGltZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHMtLTtcclxuICAgICAgICAgIHRoaXMucmVtYWluaW5nU2Vjb25kc1N0ciA9IHRoaXMucmVtYWluaW5nU2Vjb25kcyA8IDEwID8gJzAnICsgdGhpcy5yZW1haW5pbmdTZWNvbmRzIDogdGhpcy5yZW1haW5pbmdTZWNvbmRzO1xyXG4gICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nU2Vjb25kcyA9PT0gMCAmJiB0aGlzLnJlbWFpbmluZ01pbnV0ZXMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gUXVlc3Rpb24gaGFzIHRpbWVkIG91dFxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUVVFU1RJT04pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nU2Vjb25kcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNaW51dGVzLS07XHJcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nU2Vjb25kcyA9IDU5O1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHNTdHIgPSAnNTknO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMudGltZXIoKTtcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9jZWVkKCkge1xyXG5cclxuICAgICAgfSxcclxuICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gUXVpekRhdGEuZ2V0KHRoaXMsIHRoaXMubXVzdFByb3ZpZGVNZXNzYWdlKTtcclxuICAgICAgICBpZiAoZm9ybURhdGEgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvcXVpei9hbnN3ZXIvJHt0aGlzLnF1aXoudG9rZW59LyR7dGhpcy5xdWl6LnF1ZXN0aW9ufWAsIGZvcm1EYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgncXVpei1hbnN3ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Fuc3dlcicsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtcmVzdWx0c1wiPlxyXG4gICAgPGRpdiB2LWlmPVwidHJpZXMgIT09IG51bGwgJiYgdHJpZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8cD5Zb3VyIGN1cnJlbnQgYmVzdCBzY29yZSBmb3IgdGhpcyBxdWl6IGlzIHt7aGlnaH19L3t7cXVpei5wb2ludHN9fS4gVGhlIHN5c3RlbSByZXRhaW5zIHlvdXIgYmVzdFxyXG4gICAgICAgIHJlc3VsdCBhcyB5b3VyIGdyYWRlIGZvciBhIHF1aXouPC9wPlxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbCBjZW50ZXJcIj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGggY2xhc3M9XCJjZW50ZXJcIj5XaGVuIFRha2VuPC90aD5cclxuICAgICAgICAgIDx0aD5GaW5pc2hlZD88L3RoPlxyXG4gICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHIgdi1mb3I9XCJ0cmllZCBpbiB0cmllc1wiIDpjbGFzcz1cImhpZ2ggPiAwICYmIHRyaWVkLnBvaW50cyA9PT0gaGlnaCA/ICdiZXN0JyA6ICcnXCI+XHJcbiAgICAgICAgICA8dGQ+e3t0aW1lKHRyaWVkLnN0YXJ0KX19PC90ZD5cclxuICAgICAgICAgIDx0ZD57e2VsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCl9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3t0cmllZC5wb2ludHN9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8Y2FwdGlvbj5SZXN1bHRzIGZvciBRdWl6PC9jYXB0aW9uPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8cD5JZiBhIHZhbHVlIGlzIGluZGljYXRlZCBpbiB0aGUgRmluaXNoZWQ/IGNvbHVtbiwgdGhlIHF1aXpcclxuICAgICAgd2FzIGNvbXBsZXRlZCBpbiB0aGF0IGFtb3VudCBvZiB0aW1lIChpbiBtaW51dGVzIGFuZCBzZWNvbmRzKS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnkgY2VudGVyXCIgdi1pZj1cInRyaWVzICE9PSBudWxsICYmIHRyaWVzLmxlbmd0aCA9PT0gMFwiPllvdSBoYXZlIG5vdCB5ZXQgY29tcGxldGVkIHRoZSBxdWl6LCB5ZXQsIHNvIHlvdSBkbyBub3QgaGF2ZSBhIHNjb3JlLjwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiBbXHJcblx0XHRcdCdxdWl6J1xyXG5cdFx0XSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0cmllczogbnVsbCxcclxuXHRcdFx0XHRoaWdoOiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoYC9hcGkvcXVpei9yZXN1bHRzLyR7dGhpcy5xdWl6LmFzc2lnbnRhZ30vJHt0aGlzLnF1aXoucXVpenRhZ31gLCB7fSlcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcmVzdWx0cycpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyaWVzID0gZGF0YS5hdHRyaWJ1dGVzLnRyaWVzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZ2ggPSAwO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCB0cmllZCBvZiB0aGlzLnRyaWVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCt0cmllZC5wb2ludHMgPiArdGhpcy5oaWdoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZ2ggPSB0cmllZC5wb2ludHM7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRpbWUodmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh2YWx1ZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZWxhcHNlZChzdGFydCwgZW5kKSB7XHJcblx0XHRcdFx0aWYgKGVuZCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBkaWZmID0gZW5kIC0gc3RhcnQ7XHJcblx0XHRcdFx0Y29uc3QgbWluID0gTWF0aC5mbG9vcihkaWZmIC8gNjApO1xyXG5cdFx0XHRcdGNvbnN0IHNlYyA9IGRpZmYgJSA2MDtcclxuXHRcdFx0XHRyZXR1cm4gJycgKyBtaW4gKyAnOicgKyAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1xdWl6IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7IH1cXG5cXG5kaXYuY2wtcXVpeiB7XFxuICBib3JkZXI6IHNvbGlkICNjY2NjY2MgMXB0O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIG1pbi1oZWlnaHQ6IDE1ZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZWNmZmVmOyB9XFxuICBkaXYuY2wtcXVpeiA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBkaXYuY2wtcXVpeiA+IGRpdi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgZGl2LmNsLXF1aXogZGl2LmNsLXJlc3VsdHMge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxcbiAgZGl2LmNsLXF1aXogaDIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7IH1cXG4gIGRpdi5jbC1xdWl6IGRpdi5jbC1tdWx0aSB7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDNlbTsgfVxcbiAgICBkaXYuY2wtcXVpeiBkaXYuY2wtbXVsdGkgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICBkaXYuY2wtcXVpeiBwLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzQxNDI1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgZGl2LmNsLXF1aXogYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi5jbC1xdWl6IHRyLmJlc3QgdGQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRlOyB9XFxuICBkaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgICBkaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIGgzIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTsgfVxcbiAgICBkaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIHVsIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuY2wtcXVpeiBkaXYucHJldmlldyB7XFxuICAgIG1hcmdpbjogMCAwIDFlbSAwOyB9XFxuICAgIGRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IGhyIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgZGl2LmNsLXF1aXogZGl2LnByZXZpZXcgaDMge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBkaXYuY2wtcXVpeiBkaXYucHJldmlldyBwLnByZXZpZXcge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7IH1cXG4gIGRpdi5jbC1xdWl6IHAuY2wtcXVpei1hbnN3ZXItbm90ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogIzgwMDsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICNxdWl6IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWFib3V0W2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5kaXYuY2wtYWJvdXQgcFtkYXRhLXYtZDk4MTE0MmNdIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5kaXYuY2wtYWJvdXQgcCBzcGFuW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuZGl2LmNsLWFib3V0IHAgc3BhbltkYXRhLXYtZDk4MTE0MmNdOmZpcnN0LWNoaWxkIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcbnRyW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG50cltkYXRhLXYtZDk4MTE0MmNdOmZpcnN0LWNoaWxkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxudHIuc2VsZWN0ZWQgdGRbZGF0YS12LWQ5ODExNDJjXSB7XFxuICBiYWNrZ3JvdW5kOiAjODhmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50YWJsZSB0ZFtkYXRhLXYtYzI2OGRmOTZdOm50aC1jaGlsZCgxKSwgdGFibGUgdGRbZGF0YS12LWMyNjhkZjk2XTpudGgtY2hpbGQoMiksIHRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDMpLCB0YWJsZSB0ZFtkYXRhLXYtYzI2OGRmOTZdOm50aC1jaGlsZCg0KSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJmZXRjaGVyXCIsIHsgYXR0cnM6IHsgZmV0Y2hpbmc6IF92bS5mZXRjaGluZyB9IH0sIFtcbiAgICAgICAgICAhX3ZtLmZldGNoaW5nXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWFib3V0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDb3Vyc2UgTWVtYmVyOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWl6VXNlci5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBc3NpZ25tZW50OiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hc3NpZ25tZW50Lm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlF1aXo6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnF1aXp0YWcpKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGwgY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXaGVuIFRha2VuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGaW5pc2hlZD9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1heFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRyaWVzLCBmdW5jdGlvbih0cmllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB0cmllZC50b2tlbiA9PT0gX3ZtLnRva2VuID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWVkLnRva2VuID09PSBfdm0udG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlVHJ5KHRyaWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi9jbC9pbWcveC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RUcnkodHJpZWQudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udGltZSh0cmllZC5zdGFydCkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0VHJ5KHRyaWVkLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZWxhcHNlZCh0cmllZC5zdGFydCwgdHJpZWQuZW5kKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0VHJ5KHRyaWVkLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModHJpZWQucG9pbnRzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFRyeSh0cmllZC50b2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRyaWVkLm1heHBvaW50cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gcXVpeiB0cmllcyFcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYW5zd2VycyAhPT0gbnVsbCAmJiBfdm0uYW5zd2Vycy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFza2VkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFuc3dlcmVkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5zd2VycywgZnVuY3Rpb24oYW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hbnN3ZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zLm51bSA9PT0gX3ZtLmFuc3dlci5udW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdEFuc3dlcihhbnMubnVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGFucy5udW0pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYW5zLnBvaW50cykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpbWUoYW5zLnF1ZXN0aW9udGltZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpbWUoYW5zLmFuc3dlcnRpbWUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmFuc3dlcnMgIT09IG51bGwgJiYgX3ZtLmFuc3dlcnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBhbnN3ZXJzIHByb3ZpZGVkIGZvciB0aGlzIHF1aXogdHJ5LlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmFuc3dlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXF1aXpcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlF1ZXN0aW9uOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFuc3dlci5udW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYW5zd2Vycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiU3R1ZGVudCBhbnN3ZXI6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIuc3R1ZGVudGFuc3dlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYW5zd2VyLnJpZ2h0YW5zd2VyLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJDb3JyZWN0IGFuc3dlcjpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5yaWdodGFuc3dlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmV0Y2hpbmc6IF92bS5yZXN1bHRzID09PSBudWxsIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucXVpelRhZ3MsIGZ1bmN0aW9uKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5xdWl6VGFncywgZnVuY3Rpb24odGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3RhdHVzKHVzZXIsIHRhZykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVpelJlc3VsdCh1c2VyLCB0YWcpICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ubGluayh1c2VyLCB0YWcpIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2V5ZTE2LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsKHVzZXIpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ucXVpei5sZW5ndGggPiAxXG4gICAgICA/IF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiUXVlc3Rpb24gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoubGVuZ3RoKVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5xdWl6LmFuc3dlcikgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnF1aXoucXVlc3Rpb24gPCBfdm0ucXVpei5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXh0IFF1ZXN0aW9uXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnF1aXoucXVlc3Rpb24gPj0gX3ZtLnF1aXoubGVuZ3RoXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZG9uZVwiIH0sIFtfdm0uX3YoXCJUaGlzIFF1aXogaXMgQ29tcGxldGVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIllvdSBtYXkgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJldGFrZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJyZXRha2UgdGhlIHF1aXpcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBpZiB5b3Ugd2lzaFwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJyZXN1bHRzXCIsIHsgYXR0cnM6IHsgcXVpejogX3ZtLnF1aXogfSB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiVGhlIHF1aXogaXMgY2xvc2VkIGFuZCBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZS5cIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcXVpeiBoYXMgZXhwaXJlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB0YWtlbi4gUXVpenplcyBleHBpcmUgYXQgdGhlIHRpbWVcXG4gICAgdGhlIGFzc2lnbm1lbnQgaXMgZHVlLiBcIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJZb3UgY2FuIHByb2NlZWQgdGhyb3VnaCB0aGUgcXVpeiBmb3IgcHJhY3RpY2UgcHVycG9zZXMsIGJ1dCBuZXcgZ3JhZGVzIGFuZFxcbiAgICBzdWJtaXNzaW9ucyB3aWxsIG5vdCBiZSBwb3NzaWJsZS5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIldoZW4gcmVhZHksIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei5cIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcImp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnF1aXouc3BsYXNoKSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5xdWl6LmxpZ2h0bmluZyA9PT0gbnVsbFxuICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRoaXMgcXVpeiBoYXMgbm8gc3BlY2lmaWVkIHRpbWUgbGltaXQuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucXVpei5saWdodG5pbmcgIT09IG51bGxcbiAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggc2Vjb25kYSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiVGhpcyBpcyBhIGxpZ2h0bmluZyBxdWl6LlxcbiAgICBZb3UgaGF2ZSBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6LmxpZ2h0bmluZykgK1xuICAgICAgICAgICAgICAgIFwiIHNlY29uZHMgdG8gYW5zd2VyIGVhY2ggcXVlc3Rpb24uXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5hbGxvd2VkVHJpZXMgPT09IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJXaGVuIHJlYWR5LCBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzdWx0cygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJqdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX3ZtLm51bVRyaWVzIDwgX3ZtLmFsbG93ZWRUcmllc1xuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIF92bS5hbGxvd2VkVHJpZXMgPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFsbG93ZWRUcmllcyAtIF92bS5udW1UcmllcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWxsb3dlZFRyaWVzIC0gX3ZtLm51bVRyaWVzID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidHJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBsZWZ0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXaGVuIHJlYWR5LCBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwianVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy5cIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIllvdSBoYXZlIGNvbXBsZXRlZCB5b3VyIG1heGltdW0gbnVtYmVyIG9mIHRyaWVzIGZvciB0aGlzIHF1aXogYW5kIGNhbiBubyBsb25nZXIgdGFrZSBpdC4gWW91IGNhblxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXN1bHRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICBfdm0ucXVlc3Rpb24gIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5xdWl6Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlByZXZpZXcgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgICAgICAgXCIuIEF2YWlsYWJsZSB0byBzdGFmZiBvbmx5LlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwicXVlc3Rpb24tdGltZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50aW1lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnF1ZXN0aW9uKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5hbnN3ZXJzLmxlbmd0aCA+IDAgPyBfYyhcImgzXCIsIFtfdm0uX3YoXCJBbnN3ZXJzXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbnN3ZXJzLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhhbnN3ZXIpIH0gfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvbW1lbnQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ29tbWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29tbWVudCkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3ZXJcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiU3RhZmYgUXVlc3Rpb24gUHJldmlld3NcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5wcmV2aWV3cywgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBxdWVzdGlvbi5udW0gfSwgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlF1ZXN0aW9uIFwiICsgX3ZtLl9zKHF1ZXN0aW9uLm51bSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBxdWVzdGlvbi5maWxlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICBfdm0uX2wocXVlc3Rpb24uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2aWV3KGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGZpbGUpKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhlc2UgbGlua3MgYWxsb3cgeW91IHRvIHByZXZpZXcgcXVpeiBxdWVzdGlvbnMuIElmIHRoZSBxdWVzdGlvbiBpcyByYW5kb21seSBzZWxlY3RlZFxcbiAgICAgIGZyb20gbXVsdGlwbGUgZmlsZXMsIHRoZSBmaWxlcyBhcHBlYXIgYmVsb3cgdGhlIHF1ZXN0aW9uLiBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxscmVkXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJUaGlzIHBhcnQgb2YgdGhlIHBhZ2UgYXBwZWFycyBmb3JcXG5zdGFmZiBtZW1iZXJzIG9ubHkuXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLnF1ZXN0aW9uICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0ucXVpei5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiUXVlc3Rpb24gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoubGVuZ3RoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucmVtYWluaW5nU2Vjb25kcyAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZW1haW5pbmdNaW51dGVzKSArXG4gICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZW1haW5pbmdTZWNvbmRzU3RyKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIHJlbWFpbmluZyFcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInF1ZXN0aW9uLXRpbWVcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGltZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5xdWVzdGlvbikgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtfdm0uX3YoXCJTdWJtaXRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXJlc3VsdHNcIiB9LCBbXG4gICAgX3ZtLnRyaWVzICE9PSBudWxsICYmIF92bS50cmllcy5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIllvdXIgY3VycmVudCBiZXN0IHNjb3JlIGZvciB0aGlzIHF1aXogaXMgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaGlnaCkgK1xuICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucG9pbnRzKSArXG4gICAgICAgICAgICAgICAgXCIuIFRoZSBzeXN0ZW0gcmV0YWlucyB5b3VyIGJlc3RcXG4gICAgICByZXN1bHQgYXMgeW91ciBncmFkZSBmb3IgYSBxdWl6LlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGwgY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRyaWVzLCBmdW5jdGlvbih0cmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmhpZ2ggPiAwICYmIHRyaWVkLnBvaW50cyA9PT0gX3ZtLmhpZ2ggPyBcImJlc3RcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpbWUodHJpZWQuc3RhcnQpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWxhcHNlZCh0cmllZC5zdGFydCwgdHJpZWQuZW5kKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRyaWVkLnBvaW50cykpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImNhcHRpb25cIiwgW192bS5fdihcIlJlc3VsdHMgZm9yIFF1aXpcIildKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJJZiBhIHZhbHVlIGlzIGluZGljYXRlZCBpbiB0aGUgRmluaXNoZWQ/IGNvbHVtbiwgdGhlIHF1aXpcXG4gICAgd2FzIGNvbXBsZXRlZCBpbiB0aGF0IGFtb3VudCBvZiB0aW1lIChpbiBtaW51dGVzIGFuZCBzZWNvbmRzKS5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnRyaWVzICE9PSBudWxsICYmIF92bS50cmllcy5sZW5ndGggPT09IDBcbiAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnkgY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiWW91IGhhdmUgbm90IHlldCBjb21wbGV0ZWQgdGhlIHF1aXosIHlldCwgc28geW91IGRvIG5vdCBoYXZlIGEgc2NvcmUuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbX3ZtLl92KFwiV2hlbiBUYWtlblwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkZpbmlzaGVkP1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBvaW50c1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjODE4MzVjMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTgxMTQyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiNjYwNDc3MFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjY4ZGY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vX3F1aXouc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzYmFjMDFmZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vX3F1aXouc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fcXVpei5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIG1haW4gUXVpeiBlbnRyeSBwb2ludFxyXG4gKi9cclxuXHJcbmltcG9ydCB7UXVpekZhY3Rvcnl9IGZyb20gXCIuL2pzL1F1aXpGYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVpekNvbnNvbGV9IGZyb20gJy4vanMvQ29uc29sZS9RdWl6Q29uc29sZSc7XHJcblxyXG4vL1xyXG4vLyBDcmVhdGUgdGhlIFF1aXogY29tcG9uZW50c1xyXG4vL1xyXG5RdWl6RmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbi8vXHJcbi8vIEluc3RhbGwgdGhlIGNvbnNvbGUgY29tcG9uZW50c1xyXG4vL1xyXG5cclxuaWYoU2l0ZS5TaXRlLmNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgUXVpekNvbnNvbGUuc2V0dXAoU2l0ZS5TaXRlLmNvbnNvbGUpO1xyXG59XHJcbiIsIlxyXG5pbXBvcnQgUXVpelN0YXR1c0NvbXBvbmVudCBmcm9tICcuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFF1aXpSZXN1bHRDb21wb25lbnQgZnJvbSAnLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZSc7XHJcblxyXG4vKipcclxuICogQGZpbGVcclxuICogUXVpeiBzeXN0ZW0gY29uc29sZSBjb21wb25lbnRzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBRdWl6Q29uc29sZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5RdWl6Q29uc29sZS5zZXR1cCA9IGZ1bmN0aW9uKENvbnNvbGUpIHtcclxuICAgIENvbnNvbGUudGFibGVzLmFkZCh7XHJcbiAgICAgICAgdGl0bGU6ICdRdWl6JyxcclxuICAgICAgICBvcmRlcjogNjAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9xdWl6L3RhYmxlcydcclxuICAgIH0pO1xyXG5cclxuICAgIENvbnNvbGUuY29tcG9uZW50cy5hZGRSb3V0ZShcclxuICAgICAgICB7cm91dGU6ICcvcXVpei9yZXN1bHRzLzphc3NpZ250YWcnLCBjb21wb25lbnQ6IFF1aXpTdGF0dXNDb21wb25lbnQsIHByb3BzOiB0cnVlfVxyXG4gICAgKTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGUoXHJcbiAgICAgICAge3JvdXRlOiAnL3F1aXovcmVzdWx0LzptZW1iZXJpZC86YXNzaWdudGFnLzpxdWl6dGFnJywgY29tcG9uZW50OiBRdWl6UmVzdWx0Q29tcG9uZW50LCBwcm9wczogdHJ1ZX1cclxuICAgICk7XHJcblxyXG4gICAgQ29uc29sZS5jb3Vyc2UuYXNzaWdubWVudExpbmsoJ3F1aXonLCAncXVpenplcycsICcvcXVpei9yZXN1bHRzLzphc3NpZ250YWcnKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOTgxMTQyYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTgxMTQyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQ5ODExNDJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDk4MTE0MmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q5ODExNDJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjY4ZGY5NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjY4ZGY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyNjhkZjk2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzI2OGRmOTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzI2OGRmOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzI2OGRmOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNjhkZjk2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNjhkZjk2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpTdGF0dXNDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNjhkZjk2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0ICcuLi9fcXVpei5zY3NzJztcclxuaW1wb3J0IFF1aXpWdWUgZnJvbSAnLi9WdWUvSW5pdGlhbC52dWUnO1xyXG5pbXBvcnQgUXVlc3Rpb25WdWUgZnJvbSAnLi9WdWUvUXVlc3Rpb24udnVlJztcclxuaW1wb3J0IEFuc3dlclZ1ZSBmcm9tICcuL1Z1ZS9BbnN3ZXIudnVlJztcclxuaW1wb3J0IEV4cGlyZWRWdWUgZnJvbSAnLi9WdWUvRXhwaXJlZC52dWUnO1xyXG5pbXBvcnQgQ2xvc2VkVnVlIGZyb20gJy4vVnVlL0Nsb3NlZC52dWUnO1xyXG5pbXBvcnQgUmVzdWx0c1Z1ZSBmcm9tICcuL1Z1ZS9SZXN1bHRzLnZ1ZSc7XHJcbmltcG9ydCBQcmV2aWV3ZXJWdWUgZnJvbSAnLi9WdWUvUHJldmlld2VyLnZ1ZSc7XHJcbmltcG9ydCBQcmV2aWV3VnVlIGZyb20gJy4vVnVlL1ByZXZpZXcudnVlJztcclxuXHJcbmltcG9ydCB7U3RhdGVzfSBmcm9tICcuL1N0YXRlcyc7XHJcblxyXG4vKipcclxuICogUXVpeiBwcmVzZW50YXRpb24gVnVlXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBRdWl6ID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgcXVpeiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiY2wtcXVpelwiPlxyXG4gIDxjb21wb25lbnQgOmlzPVwicGFnZVwiIDpxdWl6PVwicXVpelwiIDpmaWxlPVwiZmlsZVwiIHYtb246YW5zd2VyPVwiYW5zd2VyKCRldmVudClcIiB2LW9uOm5ldy1zdGF0ZT1cIm5ld1N0YXRlKCRldmVudClcIj48L2NvbXBvbmVudD5cclxuICA8cHJldmlld2VyIHYtaWY9XCJxdWl6LnByZXZpZXcgIT09IHVuZGVmaW5lZFwiIDpxdWl6PVwicXVpelwiIHYtb246cHJldmlldz1cInByZXZpZXcoJGV2ZW50KVwiPjwvcHJldmlld2VyPlxyXG48L2Rpdj5gO1xyXG5cclxuICAgICAgICBuZXcgc2l0ZS5WdWUoe1xyXG4gICAgICAgICAgICBlbDogZWxlbWVudCxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgICAgICBzaXRlLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVpejogcXVpeixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogU3RhdGVzLklOSVRJQUwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXHJcblx0ICAgICAgICAgICAgICAgIGFmdGVyOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAnaW5pdGlhbCc6IFF1aXpWdWUsXHJcbiAgICAgICAgICAgICAgICAncXVlc3Rpb24nOiBRdWVzdGlvblZ1ZSxcclxuICAgICAgICAgICAgICAgICdhbnN3ZXInOiBBbnN3ZXJWdWUsXHJcbiAgICAgICAgICAgICAgICAnZXhwaXJlZCc6IEV4cGlyZWRWdWUsXHJcbiAgICAgICAgICAgICAgICAnY2xvc2VkJzogQ2xvc2VkVnVlLFxyXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBSZXN1bHRzVnVlLFxyXG4gICAgICAgICAgICAgICAgJ3ByZXZpZXdlcic6IFByZXZpZXdlclZ1ZSxcclxuICAgICAgICAgICAgICAgICdwcmV2aWV3JzogUHJldmlld1Z1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6LmV4cGlyZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAnZXhwaXJlZCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5xdWl6LmNsb3NlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtcXVpei1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hZnRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgXHR0aGlzLmFmdGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5TVEFSVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTdGF0ZXMuUVVFU1RJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnF1aXoucXVlc3Rpb24gPCB0aGlzLnF1aXoubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9uKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3F1ZXN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3Jlc3VsdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hZnRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTdGF0ZXMuUkVTVUxUUzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdyZXN1bHRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hZnRlciAhPT0gbnVsbCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlci5pbm5lckhUTUwgPSAnJztcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuUVVFU1RJT047XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncXVlc3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFuc3dlcihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5BTlNXRVI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ2Fuc3dlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LmFuc3dlciA9IGRhdGEuYXR0cmlidXRlcy5hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJldmlldyhmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXoucXVlc3Rpb24gPSBmaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuUFJFVklFVztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncHJldmlldyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgUXVpekRhdGEgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgZm9ybSBkYXRhIGZvciBhIHF1ZXN0aW9uIG9yIHByZXZpZXcuIFZhbGlkYXRlcyB0aGF0IGFuIGFuc3dlciBpcyBzdXBwbGllZFxyXG4gKlxyXG4gKiBAcGFyYW0gdnVlIFZ1ZSB0aGlzIGlzIGdldHRpbmcgdGhlIGZvcm0gZnJvbVxyXG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3Qgb3IgbnVsbCBpZiB2YWxpZGF0aW9uIGZhaWxzLlxyXG4gKi9cclxuUXVpekRhdGEuZ2V0ID0gZnVuY3Rpb24odnVlLCBtdXN0UHJvdmlkZU1lc3NhZ2UpIHtcclxuXHRjb25zdCBmb3JtID0gdnVlLiRyZWZzWydmb3JtJ107XHJcblx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdC8vIFZhbGlkYXRlIGFsbCBjb250cm9scyBvZiBjbGFzcyBjbC1hbnN3ZXItcmVxdWlyZWQgYXMgaGF2aW5nIGlucHV0XHJcblx0Zm9yKGNvbnN0IGlucHV0IG9mIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuY2wtYW5zd2VyLXJlcXVpcmVkJykpIHtcclxuXHRcdC8vIFZhbGlkYXRlIHRoYXQgYW4gYW5zd2VyIGhhcyBiZWVuIHN1cHBsaWVkIElGIGEgZm9ybSBjb250cm9sXHJcblx0XHQvLyBuYW1lZCBjbC1hbnN3ZXIgZXhpc3RzLlxyXG5cdFx0Y29uc3QgYW5zd2VyID0gZm9ybURhdGEuZ2V0KGlucHV0Lm5hbWUpO1xyXG5cdFx0aWYoYW5zd2VyID09PSBudWxsIHx8IGFuc3dlciA9PT0gJycpIHtcclxuXHRcdFx0aWYobXVzdFByb3ZpZGVNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR2dWUuJHNpdGUudG9hc3QodnVlLCBtdXN0UHJvdmlkZU1lc3NhZ2UpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2goaW5wdXQudHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcclxuXHRcdFx0XHRcdHZ1ZS4kc2l0ZS50b2FzdCh2dWUsICdZb3UgbXVzdCBjaG9vc2UgYW4gb3B0aW9uJyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHZ1ZS4kc2l0ZS50b2FzdCh2dWUsICdZb3UgbXVzdCBwcm92aWRlIGFuIGFuc3dlcicpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZvcm1EYXRhO1xyXG59IiwiaW1wb3J0IHtRdWl6fSBmcm9tIFwiLi9RdWl6XCI7XHJcblxyXG4vKipcclxuICogVGhlIFF1aXogc3lzdGVtIGZhY3RvcnlcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUXVpekZhY3RvcnkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuUXVpekZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IHF1aXogPSBuZXcgUXVpeihzaXRlKTtcclxuXHJcbiAgICBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtcXVpeicpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcXVpei5pbml0aWFsaXplKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGxldCBTdGF0ZXMgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU3RhdGVzLklOSVRJQUwgPSAwO1xyXG5TdGF0ZXMuU1RBUlQgPSAxO1xyXG5TdGF0ZXMuUVVFU1RJT04gPSAyO1xyXG5TdGF0ZXMuUkVTVUxUUyA9IDM7XHJcblN0YXRlcy5QUkVWSUVXID0gNDtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzEyMDBiNDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzEyMDBiNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzEyMDBiNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzEyMDBiNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzEyMDBiNDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzEyMDBiNDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMjAwYjQwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzOTcxNTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMzOTcxNTBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMzOTcxNTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMzOTcxNTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzOTcxNTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzOTcxNTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzk3MTUwZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYzZDA5NzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNjNkMDk3MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNjNkMDk3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNjNkMDk3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYzZDA5NzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTYzZDA5NzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjNkMDk3MyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NTQ0OTIxMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NTQ0OTIxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NTQ0OTIxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjU0NDkyMTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTQ0OTIxMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI2Yjg2ZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjZiODZkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjZiODZkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjZiODZkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI2Yjg2ZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjI2Yjg2ZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjZiODZkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJldmlld2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYWEwYjk3YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYWEwYjk3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYWEwYjk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYWEwYjk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJldmlld2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYWEwYjk3YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYWEwYjk3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmFhMGI5N2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDE0MDgwOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTQxNDA4MDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTQxNDA4MDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTQxNDA4MDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDE0MDgwOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDE0MDgwOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1F1ZXN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDE0MDgwOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVzdWx0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ZTY0NzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVzdWx0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNjZlNjQ3OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNjZlNjQ3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNjZlNjQ3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzdWx0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ZTY0NzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDY2ZTY0NzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjZlNjQ3OCZcIiJdLCJzb3VyY2VSb290IjoiIn0=