# Save Points / Revert Options

## Option 1 (Saved)

The current visual state of the site is saved as **Option 1**:
- Branch: `option-1`
- Tag: `option-1`

This includes: mascot, Region Razzles logo, new stadium image, scrolling ticker, video placeholder, press conference details, OG image, and full ticket flow with Stripe.

---

## Reverting to Option 1

If you make visual edits and the customer doesn't like them, you can restore Option 1:

**Option A – Discard all changes and go back to Option 1:**
```
git checkout main
git reset --hard option-1
```

**Option B – Switch to the Option 1 branch to view or work from it:**
```
git checkout option-1
```

**Option C – Create a fresh branch from Option 1 for new experiments:**
```
git checkout -b visual-experiment option-1
```

---

*Stay on `main` for ongoing work. Option 1 is your safety checkpoint.*
