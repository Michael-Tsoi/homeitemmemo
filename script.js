// ========== 贊助鏈接（已填入你的Buy Me a Coffee網址） ==========
const SPONSOR_URL = "https://buymeacoffee.com/tltsoid";

// ====== 介面文字詞庫（新增Tab多語言） ======
const i18nTexts = {
  "zh-hant": {
    appTitle: "家物記",
    subtitle: "記低物件放喺邊，可點擊選擇，亦可自行輸入",
    tabList:"物件列表",
    tabAdd:"新增物件",
    tabBackup:"備份還原",
    btnSponsor:"支持開發者",
    pageAddTitle: "新增物件",
    labelItemName: "揀物件類別，或自己輸入物件名稱",
    phItemName: "自行輸入物件名稱（例如：老花眼鏡）",
    labelPlace: "揀存放位置，或自己輸入位置",
    phPlace: "自行輸入存放位置（例如：書房第二格櫃）",
    labelPhoto: "物件相片（可唔影）",
    btnCamera: "拍攝相片",
    btnClearPhoto:"清除相片",
    textItem: "物件：",
    textPlace: "位置：",
    tmpUnselect: "未揀",
    btnSave: "儲存呢項紀錄",
    pageListTitle: "我的物件紀錄",
    emptyList: "暫時未有物件紀錄",
    viewDetail: "查看詳細",
    pageBackupTitle: "資料備份與還原",
    tipBackup: "建議定期備份，換手機可以還原翻紀錄",
    btnExport: "匯出備份檔",
    btnImport: "匯入備份檔",
    btnDelete: "刪除",
    btnClose: "關閉",
    alertNeedItemPlace: "請揀或者輸入物件同存放位置！",
    alertSaveOk: "儲存成功！",
    alertImportOk: "備份還原成功！",
    alertImportFail: "檔案錯誤，無法匯入",
    modalPlacePrefix: "存放位置：",
    confirmDelete: "確定要刪除呢條紀錄嗎？刪除之後唔可以還原！",
    confirmImport:"匯入會覆蓋現有全部紀錄，確認繼續？",
    backupFileName:"家物記備份.json"
  },
  "zh-cn": {
    appTitle: "家物记",
    subtitle: "记下物品放在哪，可以点击选择，也可以手动输入",
    tabList:"物品列表",
    tabAdd:"新增物品",
    tabBackup:"备份恢复",
    btnSponsor:"支持开发者",
    pageAddTitle: "新增物品",
    labelItemName: "选择物品分类，或手动输入物品名称",
    phItemName: "手动输入物品名称（例如：老花眼镜）",
    labelPlace: "选择存放位置，或手动输入位置",
    phPlace: "手动输入存放位置（例如：书房第二格柜子）",
    labelPhoto: "物品照片（可选）",
    btnCamera: "拍摄照片",
    btnClearPhoto:"清除照片",
    textItem: "物品：",
    textPlace: "位置：",
    tmpUnselect: "未选择",
    btnSave: "保存这条记录",
    pageListTitle: "我的物品记录",
    emptyList: "暂时没有物品记录",
    viewDetail: "查看详情",
    pageBackupTitle: "数据备份与恢复",
    tipBackup: "建议定期备份，更换手机可以恢复记录",
    btnExport: "导出备份文件",
    btnImport: "导入备份文件",
    btnDelete: "删除",
    btnClose: "关闭",
    alertNeedItemPlace: "请选择或输入物品和存放位置！",
    alertSaveOk: "保存成功！",
    alertImportOk: "备份恢复成功！",
    alertImportFail: "文件错误，无法导入",
    modalPlacePrefix: "存放位置：",
    confirmDelete: "确定要删除这条记录吗？删除后不能恢复！",
    confirmImport:"导入将会覆盖全部现有记录，确定继续？",
    backupFileName:"家物记备份.json"
  },
  "en": {
    appTitle: "HomeItemMemo",
    subtitle: "Record where your items are stored. Tap to select or type manually.",
    tabList:"Items",
    tabAdd:"Add",
    tabBackup:"Backup",
    btnSponsor:"Support Developer",
    pageAddTitle: "Add New Item",
    labelItemName: "Select item category or enter name",
    phItemName: "Enter item name (e.g. reading glasses)",
    labelPlace: "Select location or enter manually",
    phPlace: "Enter storage location (e.g. 2nd shelf, study room)",
    labelPhoto: "Item photo (optional)",
    btnCamera: "Take Photo",
    btnClearPhoto:"Clear Photo",
    textItem: "Item: ",
    textPlace: "Location: ",
    tmpUnselect: "Not selected",
    btnSave: "Save Record",
    pageListTitle: "My Item Records",
    emptyList: "No item records yet",
    viewDetail: "View Details",
    pageBackupTitle: "Backup & Restore Data",
    tipBackup: "Backup regularly to restore records on new phone",
    btnExport: "Export Backup File",
    btnImport: "Import Backup File",
    btnDelete: "Delete",
    btnClose: "Close",
    alertNeedItemPlace: "Please select or enter item and location!",
    alertSaveOk: "Saved successfully!",
    alertImportOk: "Backup restored!",
    alertImportFail: "Bad file, import failed",
    modalPlacePrefix: "Location: ",
    confirmDelete: "Are you sure you want to delete this record? It cannot be recovered!",
    confirmImport:"Import will overwrite all existing records. Continue?",
    backupFileName:"HomeItemMemo_backup.json"
  }
};
const itemCategory = {
  idCard: { "zh-hant":"身份證", "zh-cn":"身份证", "en":"ID Card" },
  medicine: { "zh-hant":"藥物", "zh-cn":"药物", "en":"Medicine" },
  bankCard: { "zh-hant":"銀行卡/存摺", "zh-cn":"银行卡/存折", "en":"Bank Card / Passbook" },
  passport: { "zh-hant":"證件護照", "zh-cn":"证件护照", "en":"Documents / Passport" },
  jewelry: { "zh-hant":"手錶首飾", "zh-cn":"手表首饰", "en":"Watch / Jewelry" },
  keys: { "zh-hant":"鎖匙", "zh-cn":"钥匙", "en":"Keys" },
  electronic: { "zh-hant":"電子產品", "zh-cn":"电子产品", "en":"Electronics" },
  otherItem: { "zh-hant":"其他物件", "zh-cn":"其他物品", "en":"Other Item" }
};
const placeList = {
  deskDrawer: { "zh-hant":"書桌抽屜", "zh-cn":"书桌抽屉", "en":"Desk Drawer" },
  bedsideCabinet: { "zh-hant":"床頭櫃", "zh-cn":"床头柜", "en":"Bedside Cabinet" },
  wardrobeTop: { "zh-hant":"衣櫃頂", "zh-cn":"衣柜顶", "en":"Top of Wardrobe" },
  safeBox: { "zh-hant":"保險箱", "zh-cn":"保险箱", "en":"Safe Box" },
  kitchenCabinet: { "zh-hant":"廚房櫃", "zh-cn":"厨房柜", "en":"Kitchen Cabinet" },
  storageBox: { "zh-hant":"雜物箱", "zh-cn":"杂物箱", "en":"Storage Box" }
};

function openSponsorPage(){
  const t = i18nTexts[currentLang];
  let msg;
  if(currentLang === "zh-hant"){
    msg = "此為自願贊助，唔付款都可以繼續免費使用家物記。將會開新瀏覽分頁。";
  }else if(currentLang === "zh-cn"){
    msg = "这是自愿赞助，不付款也可以继续免费使用家物记。将会打开新浏览器分页。";
  }else{
    msg = "This is voluntary support. You can still use HomeItemMemo for free without payment. Will open a new browser tab.";
  }
  if(confirm(msg)){
    window.open(SPONSOR_URL,"_blank","noopener,noreferrer");
  }
}

function compressImageFile(file, maxSide = 1200, quality = 0.7) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function () {
        let w = img.width;
        let h = img.height;
        const scale = Math.min(1, maxSide / Math.max(w, h));
        w = Math.round(w * scale);
        h = Math.round(h * scale);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedBase64);
      };
    };
    reader.readAsDataURL(file);
  });
}
let currentLang = "zh-hant";
let lastScrollY = 0;
let tabBarEl = null;
// Tab切換
function bindTabClick(){
  tabBarEl = document.getElementById("tabBar");
  const tabs = document.querySelectorAll(".tab-item");
  tabs.forEach(tab=>{
    tab.onclick = function(){
      const targetPage = this.getAttribute("data-page");
      // 切換頁面
      document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
      document.getElementById(targetPage).classList.remove("hidden");
      // tab高亮
      tabs.forEach(t=>t.classList.remove("active"));
      this.classList.add("active");
      // 如果切到列表頁，自動刷新列表
      if(targetPage === "page-list"){
        renderItemList();
      }
      // 切換頁面重置滾動到頂
      window.scrollTo({top:0,behavior:"auto"});
    }
  })
}
// 滾動監聽：向上滾動隱藏tab，向下滾動顯示tab
function handleScroll(){
  if(!tabBarEl) return;
  const currentY = window.scrollY;
  const diff = currentY - lastScrollY;
  if(diff > 8){
    // 向上滾動，隱藏tab
    tabBarEl.classList.add("tab-hide");
  }else if(diff < -5){
    // 向下滾動，顯示tab
    tabBarEl.classList.remove("tab-hide");
  }
  lastScrollY = currentY;
}
function setLang(langKey){
  currentLang = langKey;
  localStorage.setItem("appLang", langKey);
  renderI18n();
  renderCategoryButtons();
  renderPlaceButtons();
  refreshTmpDisplay();
}
function renderI18n(){
  const t = i18nTexts[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(t[key]) el.innerText = t[key];
  })
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el=>{
    const key = el.getAttribute("data-placeholder-i18n");
    if(t[key]) el.placeholder = t[key];
  })
}
function refreshTmpDisplay(){
  const t = i18nTexts[currentLang];
  const tmpNameDom = document.getElementById("tmp-name");
  const tmpPlaceDom = document.getElementById("tmp-place");
  if(tmpNameDom) tmpNameDom.innerText = tempItem.name === "" ? t.tmpUnselect : tempItem.name;
  if(tmpPlaceDom) tmpPlaceDom.innerText = tempItem.place === "" ? t.tmpUnselect : tempItem.place;
}
function renderCategoryButtons(){
  const wrap = document.getElementById("item-btn-grid");
  if(!wrap) return;
  wrap.innerHTML = "";
  Object.entries(itemCategory).forEach(([key, texts])=>{
    const btn = document.createElement("button");
    btn.innerText = texts[currentLang];
    btn.onclick = ()=> selectItemByKey(key);
    wrap.appendChild(btn);
  })
}
function renderPlaceButtons(){
  const wrap = document.getElementById("place-btn-grid");
  if(!wrap) return;
  wrap.innerHTML = "";
  Object.entries(placeList).forEach(([key, texts])=>{
    const btn = document.createElement("button");
    btn.innerText = texts[currentLang];
    btn.onclick = ()=> selectPlaceByKey(key);
    wrap.appendChild(btn);
  })
}
function selectItemByKey(key){
  tempItem.name = itemCategory[key][currentLang];
  const input = document.getElementById("custom-name-input");
  if(input) input.value = tempItem.name;
  refreshTmpDisplay();
}
function selectPlaceByKey(key){
  tempItem.place = placeList[key][currentLang];
  const input = document.getElementById("custom-place-input");
  if(input) input.value = tempItem.place;
  refreshTmpDisplay();
}
function clearTempPhoto(){
  tempItem.photo = null;
  const previewWrap = document.getElementById("photo-preview-wrap");
  if(previewWrap) previewWrap.classList.add("hidden");
}
let tempItem = { name: "", place: "", photo: null };
let currentViewItemIndex = null;
function bindInputEvents(){
  const nameInput = document.getElementById("custom-name-input");
  if(nameInput){
    nameInput.addEventListener("input", function(){
      tempItem.name = this.value.trim();
      refreshTmpDisplay();
    })
  }
  const placeInput = document.getElementById("custom-place-input");
  if(placeInput){
    placeInput.addEventListener("input", function(){
      tempItem.place = this.value.trim();
      refreshTmpDisplay();
    })
  }
}
async function openCamera() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.capture = "environment";
  input.onchange = async function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const compressed = await compressImageFile(file, 1200, 0.7);
    tempItem.photo = compressed;
    const previewImg = document.getElementById("photo-preview");
    if (previewImg) previewImg.src = tempItem.photo;
    const previewWrap = document.getElementById("photo-preview-wrap");
    if (previewWrap) previewWrap.classList.remove("hidden");
  };
  input.click();
}
function getAllItems() {
  const raw = localStorage.getItem("homeItemList");
  return raw ? JSON.parse(raw) : [];
}
function saveAllItems(arr) {
  try {
    localStorage.setItem("homeItemList", JSON.stringify(arr));
    return true;
  } catch (err) {
    alert("⚠️存儲空間不足！相片太多，建議刪除部分帶相片嘅紀錄或者匯出備份。");
    return false;
  }
}
function saveNewItem() {
  const t = i18nTexts[currentLang];
  if (!tempItem.name || !tempItem.place) {
    alert(t.alertNeedItemPlace);
    return;
  }
  const list = getAllItems();
  list.push({
    name: tempItem.name,
    place: tempItem.place,
    photo: tempItem.photo
  });
  const ok = saveAllItems(list);
  if (!ok) return;
  tempItem = { name: "", place: "", photo: null };
  const nameInput = document.getElementById("custom-name-input");
  const placeInput = document.getElementById("custom-place-input");
  const photoWrap = document.getElementById("photo-preview-wrap");
  if (nameInput) nameInput.value = "";
  if (placeInput) placeInput.value = "";
  if (photoWrap) photoWrap.classList.add("hidden");
  alert(t.alertSaveOk);
  refreshTmpDisplay();
  // 儲存完自動切回列表Tab
  document.querySelector('.tab-item[data-page="page-list"]').click();
}
function renderItemList() {
  const t = i18nTexts[currentLang];
  const list = getAllItems();
  const container = document.getElementById("item-list-container");
  if(!container) return;
  container.innerHTML = "";
  if(list.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:30px;">${t.emptyList}</p>`;
    return;
  }
  list.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "item-card";
    div.onclick = () => openDetailModal(idx);
    div.innerHTML = `
      <div class="item-card-text">
        <p class="item-name">${item.name}</p>
        <p class="item-location">${t.modalPlacePrefix}${item.place}</p>
      </div>
      <span class="item-card-arrow">></span>
    `;
    container.appendChild(div);
  })
}
function openDetailModal(idx) {
  const t = i18nTexts[currentLang];
  currentViewItemIndex = idx;
  const item = getAllItems()[idx];
  const modalTitle = document.getElementById("modal-title");
  const modalPlace = document.getElementById("modal-place");
  const photoWrap = document.getElementById("modal-photo-wrap");
  const modalImg = document.getElementById("modal-photo");
  if(modalTitle) modalTitle.innerText = item.name;
  if(modalPlace) modalPlace.innerText = `${t.modalPlacePrefix}${item.place}`;
  if(item.photo) {
    if(modalImg) modalImg.src = item.photo;
    if(photoWrap) photoWrap.classList.remove("hidden");
  } else {
    if(photoWrap) photoWrap.classList.add("hidden");
  }
  const modalWrap = document.getElementById("detail-modal");
  if(modalWrap) modalWrap.classList.remove("hidden");
  document.body.classList.add("modal-open");
}
function closeModal() {
  const modalWrap = document.getElementById("detail-modal");
  if(modalWrap) modalWrap.classList.add("hidden");
  document.body.classList.remove("modal-open");
  currentViewItemIndex = null;
}
function deleteCurrentItem() {
  const t = i18nTexts[currentLang];
  if(confirm(t.confirmDelete)){
    const arr = getAllItems();
    arr.splice(currentViewItemIndex,1);
    saveAllItems(arr);
    closeModal();
    renderItemList();
  }
}
function exportBackup() {
  const t = i18nTexts[currentLang];
  const arr = getAllItems();
  const jsonStr = JSON.stringify(arr, null, 2);
  const blob = new Blob([jsonStr], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = t.backupFileName;
  a.click();
  setTimeout(()=> URL.revokeObjectURL(url), 200);
}
function importBackup(event) {
  const t = i18nTexts[currentLang];
  if(!confirm(t.confirmImport)){
    event.target.value = "";
    return;
  }
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      saveAllItems(data);
      alert(t.alertImportOk);
      renderItemList();
    } catch(err) {
      alert(t.alertImportFail);
    }
  }
  reader.readAsText(file);
}
document.addEventListener('DOMContentLoaded', function(){
  const savedLang = localStorage.getItem("appLang");
  if(savedLang && i18nTexts[savedLang]) currentLang = savedLang;
  renderI18n();
  renderCategoryButtons();
  renderPlaceButtons();
  bindInputEvents();
  refreshTmpDisplay();
  bindTabClick();
  renderItemList();
  // 綁定滾動事件，使用passive提升滾動性能
  window.addEventListener('scroll', handleScroll, {passive:true});
})

// 私隱政策按鈕
document.getElementById("privacyPolicyBtn").addEventListener("click", () => {
  const privacyUrl = "https://michael-tsoi.github.io/homeitemmemo/privacy.html";
  window.open(privacyUrl, "_blank");
});
