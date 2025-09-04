# Testing Guide for Book a Service Button

## Pre-Testing Checklist

### 1. Google Form Setup Required
Before testing, you MUST complete these steps:

1. **Create Google Form** (follow GOOGLE_FORM_SETUP.md)
2. **Get the embed URL** from your Google Form
3. **Update the JavaScript file** with your actual form URL

### 2. Update Form URL in JavaScript
In `script.js`, line 311, replace:
```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';
```

With your actual Google Form URL (get this from Google Forms > Send > Embed)

## Testing Scenarios

### Test 1: Button Click Functionality
1. Open `index.html` in a web browser
2. Click the "Book a Service" button in the hero section
3. **Expected Result**: Modal should open with smooth animation
4. **Check**: Modal background should blur the page content

### Test 2: Modal Loading State
1. Click "Book a Service" button
2. **Expected Result**: Loading spinner should appear
3. **Expected Result**: "Loading booking form..." message should show
4. **Expected Result**: After form loads, spinner should disappear

### Test 3: Form Loading (With Valid URL)
1. Ensure you've updated the GOOGLE_FORM_URL in script.js
2. Click "Book a Service" button
3. **Expected Result**: Google Form should load inside the modal
4. **Expected Result**: Form should be fully interactive

### Test 4: Form Loading Error (With Invalid URL)
1. Keep the placeholder URL in script.js
2. Click "Book a Service" button
3. **Expected Result**: Error message should appear
4. **Expected Result**: Retry button and alternative contact options should show

### Test 5: Modal Close Functionality
Test all ways to close the modal:
1. **Close Button**: Click the X button in top-right
2. **Outside Click**: Click outside the modal content
3. **Escape Key**: Press Escape key
4. **Expected Result**: Modal should close smoothly in all cases

### Test 6: Form Submission (Requires Real Form)
1. Fill out the Google Form completely
2. Submit the form
3. **Expected Result**: Success notification should appear
4. **Expected Result**: Modal should close automatically
5. **Expected Result**: Data should be saved to Google Sheets

### Test 7: Mobile Responsiveness
1. Test on mobile device or use browser dev tools
2. Click "Book a Service" button
3. **Expected Result**: Modal should be properly sized for mobile
4. **Expected Result**: Form should be scrollable and usable

### Test 8: Success Notification
1. Submit a form (or simulate submission)
2. **Expected Result**: Green success notification should appear
3. **Expected Result**: WhatsApp and Close buttons should work
4. **Expected Result**: Notification should auto-close after 10 seconds

## Browser Compatibility Testing

Test in these browsers:
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Chrome
- ✅ Mobile Safari

## Performance Testing

### Loading Speed
1. Open browser dev tools (F12)
2. Go to Network tab
3. Reload the page
4. **Check**: Page should load quickly
5. **Check**: No console errors should appear

### Memory Usage
1. Open dev tools > Performance tab
2. Click "Book a Service" multiple times
3. **Check**: No memory leaks should occur
4. **Check**: Animations should be smooth

## Troubleshooting Common Issues

### Issue: Modal doesn't open
**Solution**: Check browser console for JavaScript errors

### Issue: Form doesn't load
**Solutions**:
1. Verify Google Form URL is correct
2. Check if Google Form allows embedding
3. Ensure internet connection is working

### Issue: Form submission doesn't trigger success message
**Solutions**:
1. Google Forms may not always send postMessage events
2. Test with a real form submission
3. Check browser console for messages

### Issue: Modal appears behind other content
**Solution**: Check CSS z-index values

### Issue: Mobile layout issues
**Solutions**:
1. Test viewport meta tag is present
2. Check CSS media queries
3. Verify modal max-width settings

## Console Logging

The system logs these events to browser console:
- `📋 Booking modal opened`
- `✅ Google Form loaded successfully`
- `❌ Failed to load Google Form`
- `📋 Booking modal closed`
- `📨 Message from Google Form: [data]`
- `✅ Form submitted successfully`

## Final Verification Checklist

- [ ] Button clicks and opens modal
- [ ] Loading state appears and disappears
- [ ] Google Form loads (with valid URL)
- [ ] Error handling works (with invalid URL)
- [ ] Modal closes properly (all methods)
- [ ] Form submission works
- [ ] Success notification appears
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Data saves to Google Sheets
- [ ] Email notifications work (if configured)

## Next Steps After Testing

1. **If all tests pass**: Your booking system is ready!
2. **If issues found**: Check the troubleshooting section
3. **For production**: Set up Google Analytics tracking
4. **For monitoring**: Set up form submission notifications

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Google Form settings
3. Test with different browsers
4. Check network connectivity
5. Review the GOOGLE_FORM_SETUP.md guide

---

**Note**: The booking system will only be fully functional after you create and configure your actual Google Form following the GOOGLE_FORM_SETUP.md guide.
