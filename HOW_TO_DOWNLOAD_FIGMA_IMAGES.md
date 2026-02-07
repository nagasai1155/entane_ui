# 📸 How to Download Images from Figma

## 🎯 Quick Guide to Export All Images

Since automated download has limitations, here's how to manually export all images from your Figma design:

---

## 📋 **Method 1: Export from Figma (Recommended)**

### Step 1: Open Your Figma File
1. Go to: https://www.figma.com/design/EPKm9iJw4MdcDeUWoB6eYc/Esante-New?node-id=3-4241
2. Make sure you're viewing the "Homepage" frame

### Step 2: Export Images One by One

#### **Logo:**
1. Select the logo element (esante Logo_positive_orange_RGB 1)
2. Right sidebar → Export section
3. Format: PNG
4. Size: 2x or 3x for high quality
5. Click "Export"
6. Save as: `logo.png` in `public/images/`

#### **Hero Section Images:**

**Background/Cover Images:**
1. Select "cover 1" element
2. Export as PNG, 2x
3. Save as: `hero-bg.jpg`

**Gallery Images (9 images):**
1. Select "image 47" → Export → Save as `gallery-1.jpg`
2. Select "image 48" → Export → Save as `gallery-2.jpg`
3. Continue for all gallery images (ada76142..., image 49, 6197d02a..., etc.)
4. Export all 9 images

#### **Service Card Images:**
Look for the three main service section images:
1. Tourist image → `students.jpg`
2. Business people image → `professionals.jpg`  
3. Migration related image → `migration.jpg`

#### **Australia Section:**
1. Find the Australia map/image
2. Export as: `australia-map.jpg`

#### **University Logos:**
1. Find all university logo elements
2. Export each as PNG with transparent background
3. Save as: `uni-1.png`, `uni-2.png`, ... `uni-8.png`

#### **Testimonial Photos:**
1. Find client photo elements
2. Export as: `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`

#### **Course Images:**
1. Find course category images
2. Export as: `course-management-1.jpg`, `course-management-2.jpg`, `course-engineering-1.jpg`, `course-medical-1.jpg`

---

## 📋 **Method 2: Bulk Export (Faster)**

### Step 1: Select Multiple Elements
1. Hold `Shift` and click each image element you want to export
2. Or use `Ctrl+A` to select all in a frame

### Step 2: Bulk Export
1. Right sidebar → Export section
2. Click "+" to add export settings
3. Choose PNG format
4. Choose 2x or 3x scale
5. Click "Export [number] layers"
6. Figma will download a ZIP file

### Step 3: Rename and Organize
1. Extract the ZIP file
2. Rename files according to the list below
3. Move to `public/images/` folder

---

## 📝 **Complete Image List with Exact Names**

### Required Images (Total: 35+)

```
Logo:
✅ logo.png (200×60px recommended)

Hero Section:
✅ hero-bg.jpg (1440×900px)
✅ gallery-1.jpg (155×139px)
✅ gallery-2.jpg (153×139px)
✅ gallery-3.jpg (140×177px)
✅ gallery-4.jpg (154×139px)
✅ gallery-5.jpg (155×139px)
✅ gallery-6.jpg (156×139px)
✅ gallery-7.jpg (154×139px)
✅ gallery-8.jpg (178×178px)
✅ gallery-9.jpg (155×139px)

Service Cards:
✅ students.jpg (600×400px)
✅ professionals.jpg (600×400px)
✅ migration.jpg (600×400px)

Australia Section:
✅ australia-map.jpg (800×600px)

What Esante Does:
✅ icon-placeholder.png (100×100px) - Can be icon/illustration

Fast-Track Degree:
✅ course-management-1.jpg (600×400px)
✅ course-management-2.jpg (600×400px)
✅ course-engineering-1.jpg (600×400px)
✅ course-medical-1.jpg (600×400px)

Universities:
✅ uni-1.png (200×100px, transparent)
✅ uni-2.png (200×100px, transparent)
✅ uni-3.png (200×100px, transparent)
✅ uni-4.png (200×100px, transparent)
✅ uni-5.png (200×100px, transparent)
✅ uni-6.png (200×100px, transparent)
✅ uni-7.png (200×100px, transparent)
✅ uni-8.png (200×100px, transparent)

Testimonials:
✅ testimonial-1.jpg (300×300px, square)
✅ testimonial-2.jpg (300×300px, square)
✅ testimonial-3.jpg (300×300px, square)

Newsletter:
✅ newsletter-bg.jpg (1920×600px) - Optional background
```

---

## 🎨 **Export Settings Recommendations**

### For Photos/Images:
- **Format**: JPG
- **Quality**: 80-90%
- **Scale**: 2x (for retina displays)
- **Color Space**: sRGB

### For Logos/Icons:
- **Format**: PNG
- **Background**: Transparent
- **Scale**: 2x or 3x
- **Color Space**: sRGB

### For Backgrounds:
- **Format**: JPG
- **Quality**: 70-80% (can be compressed)
- **Scale**: 1x or 2x
- **Dimensions**: As specified above

---

## 🔧 **After Downloading**

### Step 1: Optimize Images
Use online tools to compress:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/

Target file sizes:
- Small images (< 200px): < 50KB
- Medium images (200-600px): < 150KB
- Large images (> 600px): < 300KB
- Backgrounds: < 500KB

### Step 2: Place in Correct Folder
All images go in:
```
C:\Users\HP\OneDrive\Desktop\estane\public\images\
```

### Step 3: Verify Names Match Code
Double-check that filenames match exactly what's in the code:
- Case-sensitive on some systems
- No spaces in filenames
- Correct file extensions (.jpg, .png)

---

## 🚀 **Quick Checklist**

Before running the website:
- [ ] All 35+ images downloaded
- [ ] Images optimized/compressed
- [ ] All images in `public/images/` folder
- [ ] Filenames match exactly (case-sensitive)
- [ ] Logo is PNG with good quality
- [ ] University logos have transparent backgrounds
- [ ] Testimonial photos are square (300×300px)

---

## 💡 **Pro Tips**

1. **Batch Export**: Select all images at once for faster export
2. **Naming Convention**: Rename immediately after export to avoid confusion
3. **Backup**: Keep original high-res versions in a separate folder
4. **Compression**: Always compress images before using on website
5. **Formats**: 
   - Use JPG for photos
   - Use PNG for logos/icons with transparency
   - Use WebP for modern browsers (optional)

---

## 🆘 **Troubleshooting**

**Can't find an image in Figma?**
- Use Layers panel (left sidebar)
- Search by name in layers
- Check if image is in a group/frame

**Export button is grayed out?**
- Make sure element is selected
- Check if you have edit permissions
- Try refreshing Figma

**Images look blurry?**
- Export at 2x or 3x scale
- Use higher quality settings for JPG
- Ensure source image is high resolution

**File size too large?**
- Compress using TinyPNG or Squoosh
- Reduce JPG quality to 70-80%
- Resize if dimensions are too large

---

## 📱 **Alternative: Use Figma API (Advanced)**

If you're comfortable with code, you can use Figma API:

```javascript
// Example API call to get images
const fileKey = 'EPKm9iJw4MdcDeUWoB6eYc';
const nodeId = '10:1884';
const token = 'YOUR_FIGMA_TOKEN';

fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${nodeId}&format=png&scale=2`, {
  headers: { 'X-Figma-Token': token }
})
.then(res => res.json())
.then(data => console.log(data.images));
```

Get your token from: https://www.figma.com/settings (Personal Access Tokens)

---

**Once all images are in place, your website will look exactly like the Figma design!** 🎉

*Need help? Check the Figma documentation: https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma*
