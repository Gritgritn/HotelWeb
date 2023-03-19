import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Book: FC = () => {
	return (
		<Link href="/">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" style={{ width: '40px' }}>
				<path fill="#000000" d="M 392.31,0.00 Q 396.81,0.00 401.31,0.00 Q 438.15,2.10 465.19,24.81 Q 492.42,47.68 500.60,82.43 Q 502.88,92.11 503.21,102.22 Q 504.63,146.40 474.27,179.53 Q 466.92,187.55 457.97,193.66 A 1.64,1.64 63.1 0 0 457.35,195.56 Q 467.04,223.24 463.22,251.65 Q 461.90,261.50 458.87,271.15 Q 449.89,299.75 428.58,320.71 Q 421.54,327.64 413.17,333.41 Q 372.76,361.32 322.03,352.71 A 0.97,0.97 -66.9 0 0 321.11,353.08 Q 267.25,425.40 213.11,497.92 Q 208.51,504.09 207.06,505.28 Q 203.23,508.44 197.75,508.77 Q 174.71,510.18 151.69,512.00 Q 150.06,512.00 148.44,512.00 Q 139.75,510.42 136.50,503.68 Q 135.99,502.63 133.23,490.71 Q 127.57,466.22 126.50,461.25 Q 122.28,441.60 136.81,431.58 Q 140.54,429.01 147.87,426.79 Q 153.91,424.96 160.15,423.13 A 0.62,0.60 78.9 0 0 160.58,422.47 Q 159.91,416.70 159.17,411.67 Q 157.57,400.94 165.04,395.90 Q 167.51,394.23 174.93,392.06 Q 180.16,390.53 185.16,389.09 A 1.26,1.26 -13.4 0 0 186.05,387.65 Q 185.00,382.06 184.33,377.02 Q 183.23,368.71 188.39,363.51 Q 190.76,361.12 195.94,359.39 Q 203.25,356.95 210.67,355.02 A 1.22,1.21 -12.0 0 0 211.57,353.65 Q 210.20,345.37 209.31,337.44 Q 209.01,334.76 210.12,331.83 Q 210.83,329.98 212.95,327.06 Q 225.78,309.42 238.81,292.39 A 1.80,1.64 53.4 0 0 238.98,290.65 L 232.53,275.64 A 0.53,0.51 63.1 0 0 231.79,275.38 Q 154.71,321.59 77.69,367.69 Q 72.48,370.80 67.22,370.29 Q 65.66,370.14 57.35,367.37 Q 38.53,361.11 19.75,354.75 Q 11.14,351.83 9.22,344.55 Q 8.28,340.97 9.84,332.00 Q 12.09,319.07 14.24,306.13 Q 16.49,292.61 18.72,288.26 Q 23.48,279.00 33.97,275.49 Q 38.00,274.15 43.68,274.38 Q 52.38,274.74 61.01,276.00 A 0.85,0.85 10.8 0 0 61.96,275.36 Q 63.31,269.61 64.95,263.85 Q 67.67,254.33 76.16,252.60 Q 79.00,252.02 86.84,252.88 Q 92.00,253.44 97.54,253.88 A 0.98,0.97 -81.1 0 0 98.57,253.12 Q 99.59,248.68 100.64,244.73 Q 102.12,239.24 103.78,236.72 Q 108.78,229.15 119.26,230.39 Q 126.38,231.23 133.94,232.05 A 1.13,1.13 -79.9 0 0 135.15,231.20 Q 137.01,223.90 139.00,216.25 Q 139.83,213.04 142.17,210.48 Q 143.63,208.87 147.32,206.64 Q 165.57,195.61 183.66,184.85 A 1.79,1.78 -17.7 0 0 184.53,183.17 Q 182.03,150.70 195.25,122.20 Q 199.40,113.26 205.20,104.90 Q 226.76,73.85 262.32,60.69 Q 271.90,57.14 281.56,55.39 Q 292.66,53.37 303.89,53.43 A 1.11,1.10 16.3 0 0 304.85,52.91 Q 335.03,4.38 392.31,0.00 ZM 331.05,45.81 Q 327.60,49.53 324.17,54.42 A 0.52,0.52 -67.2 0 0 324.50,55.23 Q 365.62,62.93 393.19,93.56 Q 410.86,113.20 418.86,141.27 A 1.58,1.57 -79.0 0 0 419.39,142.06 Q 437.70,156.78 449.55,177.78 A 0.80,0.80 -34.0 0 0 450.75,178.01 Q 481.15,153.90 485.74,116.96 Q 486.99,106.88 485.90,97.02 Q 483.42,74.74 470.96,56.30 Q 465.35,48.00 457.98,41.13 Q 443.37,27.48 424.75,21.50 Q 391.12,10.70 358.37,25.94 Q 342.75,33.20 331.05,45.81 ZM 134.08,248.97 Q 126.79,248.34 118.28,247.65 A 1.15,1.15 7.9 0 0 117.06,248.57 Q 116.19,252.90 115.09,257.18 Q 113.66,262.76 111.82,265.30 Q 108.77,269.53 103.67,270.75 Q 100.87,271.42 94.31,270.76 Q 88.40,270.15 81.89,269.59 A 0.98,0.97 10.1 0 0 80.85,270.31 Q 79.63,274.93 78.46,279.27 Q 76.86,285.23 74.94,287.75 Q 70.06,294.14 60.74,293.12 Q 52.37,292.20 43.99,291.31 Q 38.43,290.72 35.33,294.12 Q 33.49,296.16 32.53,301.41 Q 29.19,319.80 26.25,338.27 A 0.82,0.82 -76.3 0 0 26.80,339.18 L 67.83,352.94 A 1.83,1.82 38.9 0 0 69.37,352.78 L 227.10,258.29 A 0.76,0.75 -20.6 0 0 227.46,257.51 Q 219.26,207.92 246.51,167.98 Q 252.25,159.57 259.12,152.49 Q 278.14,132.90 303.80,123.41 Q 313.20,119.95 323.06,118.12 Q 358.92,111.49 393.50,126.30 Q 394.93,126.91 394.20,125.55 Q 377.90,95.05 347.17,80.42 Q 316.98,66.07 285.00,72.00 Q 253.35,77.87 230.90,100.54 Q 223.87,107.63 218.31,116.02 Q 197.61,147.24 201.92,185.84 Q 202.33,189.46 201.91,191.15 Q 201.14,194.22 198.69,195.69 Q 177.35,208.50 156.21,221.03 A 2.47,2.46 82.7 0 0 155.09,222.48 Q 152.91,230.33 151.35,236.77 Q 148.10,250.19 134.08,248.97 ZM 197.55,402.21 Q 195.38,403.76 193.19,404.44 Q 185.50,406.81 176.60,409.33 A 0.85,0.84 77.8 0 0 175.99,410.28 Q 176.87,415.40 177.48,420.36 Q 178.20,426.19 177.04,429.55 Q 174.48,436.96 165.94,439.19 Q 161.33,440.39 151.35,443.59 Q 146.27,445.22 144.48,447.31 Q 141.60,450.67 142.75,455.75 Q 146.94,474.29 151.42,493.83 A 1.16,1.15 -8.4 0 0 152.63,494.72 L 195.86,491.76 A 1.27,1.27 -73.8 0 0 196.80,491.24 Q 254.20,414.33 311.06,338.06 Q 313.05,335.40 316.11,334.72 Q 317.98,334.30 321.82,335.18 Q 342.03,339.83 360.75,336.75 Q 402.21,329.94 426.80,296.94 Q 432.83,288.86 437.13,279.86 Q 454.36,243.89 442.43,204.04 A 1.00,0.99 -20.8 0 0 441.06,203.43 Q 423.25,211.73 403.22,212.82 A 1.14,1.14 10.1 0 0 402.24,213.50 Q 396.94,225.65 386.58,231.26 Q 377.81,236.00 367.27,235.09 Q 354.94,234.02 346.30,225.06 Q 340.94,219.48 338.47,212.68 Q 335.86,205.49 336.75,197.75 Q 338.49,182.54 351.19,173.44 Q 358.97,167.86 368.55,167.43 Q 377.51,167.02 385.80,171.11 Q 400.03,178.12 403.95,195.02 A 0.80,0.79 -8.6 0 0 404.80,195.64 Q 420.03,194.20 434.50,187.79 A 0.85,0.85 63.2 0 0 434.89,186.60 Q 413.77,149.81 375.10,137.65 Q 365.47,134.63 355.56,133.57 Q 327.49,130.57 302.31,142.31 Q 264.41,160.00 249.48,198.54 Q 245.82,207.98 244.13,217.77 Q 237.89,253.97 256.47,286.60 Q 259.84,292.52 255.44,298.44 Q 241.42,317.28 227.01,336.47 A 2.34,2.32 -30.6 0 0 226.56,338.19 Q 227.60,345.57 228.49,352.45 Q 229.13,357.45 228.21,360.49 Q 225.77,368.54 217.14,370.83 Q 213.47,371.80 213.40,371.83 Q 207.70,373.61 201.98,375.35 A 0.61,0.60 77.9 0 0 201.56,376.00 Q 202.23,381.34 203.03,386.67 Q 203.63,390.67 203.24,392.86 Q 202.68,396.04 200.90,398.76 Q 199.61,400.74 197.55,402.21 ZM 360.58,187.58 A 0.48,0.47 -52.1 0 0 360.68,188.39 Q 372.55,193.58 385.23,195.35 Q 386.65,195.55 385.96,194.30 Q 379.93,183.40 368.34,184.47 Q 366.08,184.68 364.25,185.44 Q 362.24,186.27 360.58,187.58 ZM 382.18,212.25 Q 367.99,210.03 354.59,204.49 Q 353.57,204.07 353.86,205.14 Q 356.28,214.13 364.34,217.10 Q 369.18,218.88 373.78,217.90 Q 378.52,216.89 382.47,213.18 Q 383.28,212.42 382.18,212.25 Z"/>
				<rect fill="#000000" x="-87.98" y="-8.53" transform="translate(134.54,283.93) rotate(-31.0)" width="175.96" height="17.06" rx="8.46"/>
				<rect fill="#000000" x="-8.53" y="-100.28" transform="translate(238.40,392.68) rotate(36.7)" width="17.06" height="200.56" rx="8.47"/>
			</svg>
		</Link>
	)
}

export default Book
